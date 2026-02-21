// This script converts all .ts/.tsx files under resources/js to .js/.jsx
// It uses Babel to strip TypeScript types and preserve JSX.

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

function convertFile(filePath) {
    let code = fs.readFileSync(filePath, 'utf8');

    // Store import.meta.glob patterns to preserve them
    const globPatterns = [];
    code = code.replace(/import\.meta\.glob\([^)]+\)/g, (match) => {
        globPatterns.push(match);
        return `__GLOB_PATTERN_${globPatterns.length - 1}__`;
    });

    const result = babel.transformSync(code, {
        filename: filePath,
        presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
        ],
        plugins: [],
        configFile: false,
        babelrc: false,
        retainLines: true,
        generatorOpts: {
            // keep JSX extension if .tsx
            jsescOption: { minimal: true },
        },
    });

    // Restore import.meta.glob patterns
    let output = result.code;
    globPatterns.forEach((pattern, index) => {
        output = output.replace(`__GLOB_PATTERN_${index}__`, pattern);
    });

    let outPath = filePath.replace(/\.tsx?$/, (m) => (m === '.ts' ? '.js' : '.jsx'));
    // replace any remaining tsx/ts references inside strings (but not import.meta.glob patterns)
    output = output.replace(/\.tsx?(?!.*__GLOB_PATTERN)/g, (m) => (m === '.ts' ? '.js' : '.jsx'));

    fs.writeFileSync(outPath, output, 'utf8');
    fs.unlinkSync(filePath);
    console.log(`Converted ${filePath} -> ${outPath}`);
}

function walk(dir) {
    fs.readdirSync(dir).forEach((file) => {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            walk(full);
        } else if (/\.(ts|tsx)$/.test(full)) {
            convertFile(full);
        }
    });
}

const root = path.join(__dirname, '..', 'resources', 'js');
walk(root);

// remove types folder if it exists
const typesDir = path.join(root, 'types');
if (fs.existsSync(typesDir)) {
    fs.rmSync(typesDir, { recursive: true, force: true });
    console.log('Removed types directory');
}

// delete tsconfig.json if present
const tsconfig = path.join(__dirname, '..', 'tsconfig.json');
if (fs.existsSync(tsconfig)) {
    fs.unlinkSync(tsconfig);
    console.log('Deleted tsconfig.json');
}

console.log('Conversion complete.');

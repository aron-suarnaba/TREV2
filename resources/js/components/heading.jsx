import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
export default function Heading({ title, description, variant = 'default' }) {
    return (
        /*#__PURE__*/
        _jsxs('header', {
            className: variant === 'small' ? '' : 'mb-8 space-y-0.5',
            children: [
                /*#__PURE__*/
                _jsx('h2', {
                    className:
                        variant === 'small'
                            ? 'mb-0.5 text-base font-medium'
                            : 'text-xl font-semibold tracking-tight',
                    children: title,
                }),
                description /*#__PURE__*/ &&
                    _jsx('p', {
                        className: 'text-sm text-muted-foreground',
                        children: description,
                    }),
            ],
        })
    );
}

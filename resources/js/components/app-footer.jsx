import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AppFooter() {
    return (
        /*#__PURE__*/
        _jsx('footer', {
            className:
                'border-t border-sidebar-border/50 px-6 py-4 text-xs text-muted-foreground md:px-4',
            /*#__PURE__*/
            children: _jsxs('div', {
                className:
                    'flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left',
                children: [
                    /*#__PURE__*/
                    _jsx('span', {
                        children: `© ${new Date().getFullYear()} ${
                            import.meta.env.VITE_APP_NAME || 'Printwell'
                        }. All rights reserved.`,
                    }),
                    /*#__PURE__*/
                    _jsx('span', {
                        children: 'Operations dashboard',
                    }),
                ],
            }),
        })
    );
}

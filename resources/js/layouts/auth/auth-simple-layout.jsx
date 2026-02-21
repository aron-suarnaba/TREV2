import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';

import { home } from '@/routes';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AuthSimpleLayout({ children, title, description }) {
    return (
        /*#__PURE__*/
        _jsx('div', {
            className:
                'flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10',
            /*#__PURE__*/
            children: _jsx('div', {
                className: 'w-full max-w-sm',
                /*#__PURE__*/
                children: _jsxs('div', {
                    className: 'flex flex-col gap-8',
                    children: [
                        /*#__PURE__*/
                        _jsxs('div', {
                            className: 'flex flex-col items-center gap-4',
                            children: [
                                /*#__PURE__*/
                                _jsxs(Link, {
                                    href: home(),
                                    className:
                                        'flex flex-col items-center gap-2 font-medium',
                                    children: [
                                        /*#__PURE__*/

                                        _jsx('div', {
                                            className:
                                                'mb-1 flex h-9 w-9 items-center justify-center rounded-md',
                                            /*#__PURE__*/
                                            children: _jsx(AppLogoIcon, {
                                                className:
                                                    'size-9 fill-current text-[var(--foreground)] dark:text-white',
                                            }),
                                        }) /*#__PURE__*/,
                                        _jsx('span', {
                                            className: 'sr-only',
                                            children: title,
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsxs('div', {
                                    className: 'space-y-2 text-center',
                                    children: [
                                        /*#__PURE__*/
                                        _jsx('h1', {
                                            className: 'text-xl font-medium',
                                            children: title,
                                        }) /*#__PURE__*/,
                                        _jsx('p', {
                                            className:
                                                'text-center text-sm text-muted-foreground',
                                            children: description,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        children,
                    ],
                }),
            }),
        })
    );
}

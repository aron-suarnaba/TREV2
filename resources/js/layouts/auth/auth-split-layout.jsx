import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';

import { home } from '@/routes';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AuthSplitLayout({ children, title, description }) {
    const { name } = usePage().props;

    return (
        /*#__PURE__*/
        _jsxs('div', {
            className:
                'relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0',
            children: [
                /*#__PURE__*/
                _jsxs('div', {
                    className:
                        'relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r',
                    children: [
                        /*#__PURE__*/
                        _jsx('div', {
                            className: 'absolute inset-0 bg-zinc-900',
                        }) /*#__PURE__*/,
                        _jsxs(Link, {
                            href: home(),
                            className:
                                'relative z-20 flex items-center text-lg font-medium',
                            children: [
                                /*#__PURE__*/

                                _jsx(AppLogoIcon, {
                                    className:
                                        'mr-2 size-8 fill-current text-white',
                                }),
                                name,
                            ],
                        }),
                    ],
                }) /*#__PURE__*/,
                _jsx('div', {
                    className: 'w-full lg:p-8',
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        className:
                            'mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]',
                        children: [
                            /*#__PURE__*/
                            _jsx(Link, {
                                href: home(),
                                className:
                                    'relative z-20 flex items-center justify-center lg:hidden',
                                /*#__PURE__*/

                                children: _jsx(AppLogoIcon, {
                                    className:
                                        'h-10 fill-current text-black sm:h-12',
                                }),
                            }) /*#__PURE__*/,
                            _jsxs('div', {
                                className:
                                    'flex flex-col items-start gap-2 text-left sm:items-center sm:text-center',
                                children: [
                                    /*#__PURE__*/
                                    _jsx('h1', {
                                        className: 'text-xl font-medium',
                                        children: title,
                                    }) /*#__PURE__*/,
                                    _jsx('p', {
                                        className:
                                            'text-sm text-balance text-muted-foreground',
                                        children: description,
                                    }),
                                ],
                            }),
                            children,
                        ],
                    }),
                }),
            ],
        })
    );
}

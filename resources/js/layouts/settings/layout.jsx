import { Link } from '@inertiajs/react';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { cn, toUrl } from '@/lib/utils';

import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { edit as editPassword } from '@/routes/user-password';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const sidebarNavItems = [
    {
        title: 'Profile',
        href: edit(),
        icon: null,
    },
    {
        title: 'Password',
        href: editPassword(),
        icon: null,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: null,
    },
];

export default function SettingsLayout({ children }) {
    const { isCurrentUrl } = useCurrentUrl();

    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        /*#__PURE__*/
        _jsxs('div', {
            className: 'px-4 py-6',
            children: [
                /*#__PURE__*/
                _jsx(Heading, {
                    title: 'Settings',
                    description: 'Manage your profile and account settings',
                }) /*#__PURE__*/,

                _jsxs('div', {
                    className: 'flex flex-col lg:flex-row lg:space-x-12',
                    children: [
                        /*#__PURE__*/
                        _jsx('aside', {
                            className: 'w-full max-w-xl lg:w-48',
                            /*#__PURE__*/
                            children: _jsx('nav', {
                                className: 'flex flex-col space-y-1 space-x-0',
                                'aria-label': 'Settings',
                                children: sidebarNavItems.map(
                                    (item, index /*#__PURE__*/) =>
                                        _jsx(
                                            Button,
                                            {
                                                size: 'sm',
                                                variant: 'ghost',
                                                asChild: true,
                                                className: cn(
                                                    'w-full justify-start',
                                                    {
                                                        'bg-muted':
                                                            isCurrentUrl(
                                                                item.href,
                                                            ),
                                                    },
                                                ),
                                                /*#__PURE__*/

                                                children: _jsxs(Link, {
                                                    href: item.href,
                                                    children: [
                                                        item.icon /*#__PURE__*/ &&
                                                            _jsx(item.icon, {
                                                                className:
                                                                    'h-4 w-4',
                                                            }),

                                                        item.title,
                                                    ],
                                                }),
                                            },
                                            `${toUrl(item.href)}-${index}`,
                                        ),
                                ),
                            }),
                        }) /*#__PURE__*/,

                        _jsx(Separator, {
                            className: 'my-6 lg:hidden',
                        }) /*#__PURE__*/,

                        _jsx('div', {
                            className: 'flex-1 md:max-w-2xl',
                            /*#__PURE__*/
                            children: _jsx('section', {
                                className: 'max-w-xl space-y-12',
                                children: children,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}

import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Menu, Search } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn, toUrl } from '@/lib/utils';

import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';
import { dashboard } from '@/routes';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

const mainNavItems = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const rightNavItems = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AppHeader({ breadcrumbs = [] }) {
    const page = usePage();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();
    return (
        /*#__PURE__*/
        _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/
                _jsx('div', {
                    className: 'border-b border-sidebar-border/80',
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        className:
                            'mx-auto flex h-16 items-center px-4 md:max-w-7xl',
                        children: [
                            /*#__PURE__*/

                            _jsx('div', {
                                className: 'lg:hidden',
                                /*#__PURE__*/
                                children: _jsxs(Sheet, {
                                    children: [
                                        /*#__PURE__*/
                                        _jsx(SheetTrigger, {
                                            asChild: true,
                                            /*#__PURE__*/
                                            children: _jsx(Button, {
                                                variant: 'ghost',
                                                size: 'icon',
                                                className:
                                                    'mr-2 h-[34px] w-[34px]',
                                                /*#__PURE__*/

                                                children: _jsx(Menu, {
                                                    className: 'h-5 w-5',
                                                }),
                                            }),
                                        }) /*#__PURE__*/,
                                        _jsxs(SheetContent, {
                                            side: 'left',
                                            className:
                                                'flex h-full w-64 flex-col items-stretch justify-between bg-sidebar',
                                            children: [
                                                /*#__PURE__*/

                                                _jsx(SheetTitle, {
                                                    className: 'sr-only',
                                                    children: 'Navigation Menu',
                                                }) /*#__PURE__*/,
                                                _jsx(SheetHeader, {
                                                    className:
                                                        'flex justify-start text-left',
                                                    /*#__PURE__*/
                                                    children: _jsx(
                                                        AppLogoIcon,
                                                        {
                                                            className:
                                                                'h-6 w-6 fill-current text-black dark:text-white',
                                                        },
                                                    ),
                                                }) /*#__PURE__*/,
                                                _jsx('div', {
                                                    className:
                                                        'flex h-full flex-1 flex-col space-y-4 p-4',
                                                    /*#__PURE__*/
                                                    children: _jsxs('div', {
                                                        className:
                                                            'flex h-full flex-col justify-between text-sm',
                                                        children: [
                                                            /*#__PURE__*/
                                                            _jsx('div', {
                                                                className:
                                                                    'flex flex-col space-y-4',
                                                                children:
                                                                    mainNavItems.map(
                                                                        (
                                                                            item /*#__PURE__*/,
                                                                        ) =>
                                                                            _jsxs(
                                                                                Link,
                                                                                {
                                                                                    href: item.href,
                                                                                    className:
                                                                                        'flex items-center space-x-2 font-medium',
                                                                                    children:
                                                                                        [
                                                                                            item.icon /*#__PURE__*/ &&
                                                                                                _jsx(
                                                                                                    item.icon,
                                                                                                    {
                                                                                                        className:
                                                                                                            'h-5 w-5',
                                                                                                    },
                                                                                                ) /*#__PURE__*/,

                                                                                            _jsx(
                                                                                                'span',
                                                                                                {
                                                                                                    children:
                                                                                                        item.title,
                                                                                                },
                                                                                            ),
                                                                                        ],
                                                                                },
                                                                                item.title,
                                                                            ),
                                                                    ),
                                                            }) /*#__PURE__*/,

                                                            _jsx('div', {
                                                                className:
                                                                    'flex flex-col space-y-4',
                                                                children:
                                                                    rightNavItems.map(
                                                                        (
                                                                            item /*#__PURE__*/,
                                                                        ) =>
                                                                            _jsxs(
                                                                                'a',
                                                                                {
                                                                                    href: toUrl(
                                                                                        item.href,
                                                                                    ),
                                                                                    target: '_blank',
                                                                                    rel: 'noopener noreferrer',
                                                                                    className:
                                                                                        'flex items-center space-x-2 font-medium',
                                                                                    children:
                                                                                        [
                                                                                            item.icon /*#__PURE__*/ &&
                                                                                                _jsx(
                                                                                                    item.icon,
                                                                                                    {
                                                                                                        className:
                                                                                                            'h-5 w-5',
                                                                                                    },
                                                                                                ) /*#__PURE__*/,

                                                                                            _jsx(
                                                                                                'span',
                                                                                                {
                                                                                                    children:
                                                                                                        item.title,
                                                                                                },
                                                                                            ),
                                                                                        ],
                                                                                },
                                                                                item.title,
                                                                            ),
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }) /*#__PURE__*/,

                            _jsx(Link, {
                                href: dashboard(),
                                prefetch: true,
                                className: 'flex items-center space-x-2',
                                /*#__PURE__*/

                                children: _jsx(AppLogo, {}),
                            }) /*#__PURE__*/,

                            _jsx('div', {
                                className:
                                    'ml-6 hidden h-full items-center space-x-6 lg:flex',
                                /*#__PURE__*/
                                children: _jsx(NavigationMenu, {
                                    className: 'flex h-full items-stretch',
                                    /*#__PURE__*/
                                    children: _jsx(NavigationMenuList, {
                                        className:
                                            'flex h-full items-stretch space-x-2',
                                        children: mainNavItems.map(
                                            (item, index /*#__PURE__*/) =>
                                                _jsxs(
                                                    NavigationMenuItem,
                                                    {
                                                        className:
                                                            'relative flex h-full items-center',
                                                        children: [
                                                            /*#__PURE__*/

                                                            _jsxs(Link, {
                                                                href: item.href,
                                                                className: cn(
                                                                    navigationMenuTriggerStyle(),
                                                                    whenCurrentUrl(
                                                                        item.href,
                                                                        activeItemStyles,
                                                                    ),
                                                                    'h-9 cursor-pointer px-3',
                                                                ),
                                                                children: [
                                                                    item.icon /*#__PURE__*/ &&
                                                                        _jsx(
                                                                            item.icon,
                                                                            {
                                                                                className:
                                                                                    'mr-2 h-4 w-4',
                                                                            },
                                                                        ),

                                                                    item.title,
                                                                ],
                                                            }),
                                                            isCurrentUrl(
                                                                item.href,
                                                            ) /*#__PURE__*/ &&
                                                                _jsx('div', {
                                                                    className:
                                                                        'absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white',
                                                                }),
                                                        ],
                                                    },
                                                    index,
                                                ),
                                        ),
                                    }),
                                }),
                            }) /*#__PURE__*/,

                            _jsxs('div', {
                                className:
                                    'ml-auto flex items-center space-x-2',
                                children: [
                                    /*#__PURE__*/
                                    _jsxs('div', {
                                        className:
                                            'relative flex items-center space-x-1',
                                        children: [
                                            /*#__PURE__*/
                                            _jsx(Button, {
                                                variant: 'ghost',
                                                size: 'icon',
                                                className:
                                                    'group h-9 w-9 cursor-pointer',
                                                /*#__PURE__*/

                                                children: _jsx(Search, {
                                                    className:
                                                        '!size-5 opacity-80 group-hover:opacity-100',
                                                }),
                                            }) /*#__PURE__*/,
                                            _jsx('div', {
                                                className:
                                                    'ml-1 hidden gap-1 lg:flex',
                                                children: rightNavItems.map(
                                                    (item /*#__PURE__*/) =>
                                                        _jsx(
                                                            TooltipProvider,
                                                            {
                                                                delayDuration: 0,
                                                                /*#__PURE__*/

                                                                children: _jsxs(
                                                                    Tooltip,
                                                                    {
                                                                        children:
                                                                            [
                                                                                /*#__PURE__*/
                                                                                _jsx(
                                                                                    TooltipTrigger,
                                                                                    {
                                                                                        /*#__PURE__*/
                                                                                        children:
                                                                                            _jsxs(
                                                                                                'a',
                                                                                                {
                                                                                                    href: toUrl(
                                                                                                        item.href,
                                                                                                    ),
                                                                                                    target: '_blank',
                                                                                                    rel: 'noopener noreferrer',
                                                                                                    className:
                                                                                                        'group inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
                                                                                                    children:
                                                                                                        [
                                                                                                            /*#__PURE__*/

                                                                                                            _jsx(
                                                                                                                'span',
                                                                                                                {
                                                                                                                    className:
                                                                                                                        'sr-only',
                                                                                                                    children:
                                                                                                                        item.title,
                                                                                                                },
                                                                                                            ),
                                                                                                            item.icon /*#__PURE__*/ &&
                                                                                                                _jsx(
                                                                                                                    item.icon,
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'size-5 opacity-80 group-hover:opacity-100',
                                                                                                                    },
                                                                                                                ),
                                                                                                        ],
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ) /*#__PURE__*/,
                                                                                _jsx(
                                                                                    TooltipContent,
                                                                                    {
                                                                                        /*#__PURE__*/
                                                                                        children:
                                                                                            _jsx(
                                                                                                'p',
                                                                                                {
                                                                                                    children:
                                                                                                        item.title,
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            },
                                                            item.title,
                                                        ),
                                                ),
                                            }),
                                        ],
                                    }) /*#__PURE__*/,
                                    _jsxs(DropdownMenu, {
                                        children: [
                                            /*#__PURE__*/
                                            _jsx(DropdownMenuTrigger, {
                                                asChild: true,
                                                /*#__PURE__*/
                                                children: _jsx(Button, {
                                                    variant: 'ghost',
                                                    className:
                                                        'size-10 rounded-full p-1',
                                                    /*#__PURE__*/

                                                    children: _jsxs(Avatar, {
                                                        className:
                                                            'size-8 overflow-hidden rounded-full',
                                                        children: [
                                                            /*#__PURE__*/
                                                            _jsx(AvatarImage, {
                                                                src: auth.user
                                                                    .avatar,
                                                                alt: auth.user
                                                                    .name,
                                                            }) /*#__PURE__*/,
                                                            _jsx(
                                                                AvatarFallback,
                                                                {
                                                                    className:
                                                                        'rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white',
                                                                    children:
                                                                        getInitials(
                                                                            auth
                                                                                .user
                                                                                .name,
                                                                        ),
                                                                },
                                                            ),
                                                        ],
                                                    }),
                                                }),
                                            }) /*#__PURE__*/,
                                            _jsx(DropdownMenuContent, {
                                                className: 'w-56',
                                                align: 'end',
                                                /*#__PURE__*/
                                                children: _jsx(
                                                    UserMenuContent,
                                                    { user: auth.user },
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                breadcrumbs.length > 1 /*#__PURE__*/ &&
                    _jsx('div', {
                        className:
                            'flex w-full border-b border-sidebar-border/70',
                        /*#__PURE__*/
                        children: _jsx('div', {
                            className:
                                'mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl',
                            /*#__PURE__*/
                            children: _jsx(Breadcrumbs, {
                                breadcrumbs: breadcrumbs,
                            }),
                        }),
                    }),
            ],
        })
    );
}

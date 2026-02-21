import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import AppLogo from './app-logo';
import { dashboard } from '@/routes';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const mainNavItems = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems = [
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

export function AppSidebar() {
    return (
        /*#__PURE__*/
        _jsxs(Sidebar, {
            collapsible: 'icon',
            variant: 'inset',
            children: [
                /*#__PURE__*/
                _jsx(SidebarHeader, {
                    /*#__PURE__*/
                    children: _jsx(SidebarMenu, {
                        /*#__PURE__*/
                        children: _jsx(SidebarMenuItem, {
                            /*#__PURE__*/
                            children: _jsx(SidebarMenuButton, {
                                size: 'lg',
                                asChild: true,
                                /*#__PURE__*/
                                children: _jsx(Link, {
                                    href: dashboard(),
                                    prefetch: true,
                                    /*#__PURE__*/ children: _jsx(AppLogo, {}),
                                }),
                            }),
                        }),
                    }),
                }) /*#__PURE__*/,

                _jsx(SidebarContent, {
                    /*#__PURE__*/
                    children: _jsx(NavMain, { items: mainNavItems }),
                }) /*#__PURE__*/,

                _jsxs(SidebarFooter, {
                    children: [
                        /*#__PURE__*/
                        _jsx(NavFooter, {
                            items: footerNavItems,
                            className: 'mt-auto',
                        }) /*#__PURE__*/,
                        _jsx(NavUser, {}),
                    ],
                }),
            ],
        })
    );
}

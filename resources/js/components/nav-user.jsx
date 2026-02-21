import { usePage } from '@inertiajs/react';
import { ChevronsUpDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export function NavUser() {
    const { auth } = usePage().props;
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    return (
        /*#__PURE__*/
        _jsx(SidebarMenu, {
            /*#__PURE__*/
            children: _jsx(SidebarMenuItem, {
                /*#__PURE__*/
                children: _jsxs(DropdownMenu, {
                    children: [
                        /*#__PURE__*/
                        _jsx(DropdownMenuTrigger, {
                            asChild: true,
                            /*#__PURE__*/
                            children: _jsxs(SidebarMenuButton, {
                                size: 'lg',
                                className:
                                    'group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent',
                                'data-test': 'sidebar-menu-button',
                                children: [
                                    /*#__PURE__*/

                                    _jsx(UserInfo, {
                                        user: auth.user,
                                    }) /*#__PURE__*/,
                                    _jsx(ChevronsUpDown, {
                                        className: 'ml-auto size-4',
                                    }),
                                ],
                            }),
                        }) /*#__PURE__*/,
                        _jsx(DropdownMenuContent, {
                            className:
                                'w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg',
                            align: 'end',
                            side: isMobile
                                ? 'bottom'
                                : state === 'collapsed'
                                  ? 'left'
                                  : 'bottom',
                            /*#__PURE__*/

                            children: _jsx(UserMenuContent, {
                                user: auth.user,
                            }),
                        }),
                    ],
                }),
            }),
        })
    );
}

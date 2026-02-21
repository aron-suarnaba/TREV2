import { Link } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export function NavMain({ items = [] }) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        /*#__PURE__*/
        _jsxs(SidebarGroup, {
            className: 'px-2 py-0',
            children: [
                /*#__PURE__*/
                _jsx(SidebarGroupLabel, { children: 'Platform' }) /*#__PURE__*/,
                _jsx(SidebarMenu, {
                    children: items.map((item /*#__PURE__*/) =>
                        _jsx(
                            SidebarMenuItem,
                            {
                                /*#__PURE__*/
                                children: _jsx(SidebarMenuButton, {
                                    asChild: true,
                                    isActive: isCurrentUrl(item.href),
                                    tooltip: { children: item.title },
                                    /*#__PURE__*/

                                    children: _jsxs(Link, {
                                        href: item.href,
                                        prefetch: true,
                                        children: [
                                            item.icon &&
                                                /*#__PURE__*/ _jsx(
                                                    item.icon,
                                                    {},
                                                ) /*#__PURE__*/,
                                            _jsx('span', {
                                                children: item.title,
                                            }),
                                        ],
                                    }),
                                }),
                            },
                            item.title,
                        ),
                    ),
                }),
            ],
        })
    );
}

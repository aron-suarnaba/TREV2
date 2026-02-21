import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { toUrl } from '@/lib/utils';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export function NavFooter({ items, className, ...props }) {
    return (
        /*#__PURE__*/
        _jsx(SidebarGroup, {
            ...props,
            className: `group-data-[collapsible=icon]:p-0 ${className || ''}`,
            /*#__PURE__*/

            children: _jsx(SidebarGroupContent, {
                /*#__PURE__*/
                children: _jsx(SidebarMenu, {
                    children: items.map((item /*#__PURE__*/) =>
                        _jsx(
                            SidebarMenuItem,
                            {
                                /*#__PURE__*/
                                children: _jsx(SidebarMenuButton, {
                                    asChild: true,
                                    className:
                                        'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100',
                                    /*#__PURE__*/

                                    children: _jsxs('a', {
                                        href: toUrl(item.href),
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        children: [
                                            item.icon /*#__PURE__*/ &&
                                                _jsx(item.icon, {
                                                    className: 'h-5 w-5',
                                                }) /*#__PURE__*/,

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
            }),
        })
    );
}

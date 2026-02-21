import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AppSidebarLayout({ children, breadcrumbs = [] }) {
    return (
        /*#__PURE__*/
        _jsxs(AppShell, {
            variant: 'sidebar',
            children: [
                /*#__PURE__*/ _jsx(AppSidebar, {}) /*#__PURE__*/,
                _jsxs(AppContent, {
                    variant: 'sidebar',
                    className: 'overflow-x-hidden',
                    children: [
                        /*#__PURE__*/
                        _jsx(AppSidebarHeader, { breadcrumbs: breadcrumbs }),
                        children,
                    ],
                }),
            ],
        })
    );
}

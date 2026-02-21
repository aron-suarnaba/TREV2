import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AppHeaderLayout({ children, breadcrumbs }) {
    return (
        /*#__PURE__*/
        _jsxs(AppShell, {
            children: [
                /*#__PURE__*/
                _jsx(AppHeader, { breadcrumbs: breadcrumbs }) /*#__PURE__*/,
                _jsx(AppContent, { children: children }),
            ],
        })
    );
}

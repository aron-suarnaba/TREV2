import { usePage } from '@inertiajs/react';

import { SidebarProvider } from '@/components/ui/sidebar';
import { jsx as _jsx } from 'react/jsx-runtime';

export function AppShell({ children, variant = 'header' }) {
    const isOpen = usePage().props.sidebarOpen;

    if (variant === 'header') {
        return (
            /*#__PURE__*/
            _jsx('div', {
                className: 'flex min-h-screen w-full flex-col',
                children: children,
            })
        );
    }

    return /*#__PURE__*/ _jsx(SidebarProvider, {
        defaultOpen: isOpen,
        children: children,
    });
}

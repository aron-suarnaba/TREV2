import { Link, router } from '@inertiajs/react';
import { LogOut, Settings } from 'lucide-react';
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export function UserMenuContent({ user }) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        /*#__PURE__*/
        _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/
                _jsx(DropdownMenuLabel, {
                    className: 'p-0 font-normal',
                    /*#__PURE__*/
                    children: _jsx('div', {
                        className:
                            'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                        /*#__PURE__*/
                        children: _jsx(UserInfo, {
                            user: user,
                            showEmail: true,
                        }),
                    }),
                }) /*#__PURE__*/,
                _jsx(DropdownMenuSeparator, {}) /*#__PURE__*/,
                _jsx(DropdownMenuGroup, {
                    /*#__PURE__*/
                    children: _jsx(DropdownMenuItem, {
                        asChild: true,
                        /*#__PURE__*/
                        children: _jsxs(Link, {
                            className: 'block w-full cursor-pointer',
                            href: edit(),
                            prefetch: true,
                            onClick: cleanup,
                            children: [
                                /*#__PURE__*/

                                _jsx(Settings, { className: 'mr-2' }),
                                'Settings',
                            ],
                        }),
                    }),
                }) /*#__PURE__*/,
                _jsx(DropdownMenuSeparator, {}) /*#__PURE__*/,
                _jsx(DropdownMenuItem, {
                    asChild: true,
                    /*#__PURE__*/
                    children: _jsxs(Link, {
                        className: 'block w-full cursor-pointer',
                        href: logout(),
                        as: 'button',
                        onClick: handleLogout,
                        'data-test': 'logout-button',
                        children: [
                            /*#__PURE__*/

                            _jsx(LogOut, { className: 'mr-2' }),
                            'Log out',
                        ],
                    }),
                }),
            ],
        })
    );
}

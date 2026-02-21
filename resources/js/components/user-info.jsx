import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export function UserInfo({ user, showEmail = false }) {
    const getInitials = useInitials();

    return (
        /*#__PURE__*/
        _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/
                _jsxs(Avatar, {
                    className: 'h-8 w-8 overflow-hidden rounded-full',
                    children: [
                        /*#__PURE__*/
                        _jsx(AvatarImage, {
                            src: user.avatar,
                            alt: user.name,
                        }) /*#__PURE__*/,
                        _jsx(AvatarFallback, {
                            className:
                                'rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white',
                            children: getInitials(user.name),
                        }),
                    ],
                }) /*#__PURE__*/,
                _jsxs('div', {
                    className: 'grid flex-1 text-left text-sm leading-tight',
                    children: [
                        /*#__PURE__*/
                        _jsx('span', {
                            className: 'truncate font-medium',
                            children: user.name,
                        }),
                        showEmail /*#__PURE__*/ &&
                            _jsx('span', {
                                className:
                                    'truncate text-xs text-muted-foreground',
                                children: user.email,
                            }),
                    ],
                }),
            ],
        })
    );
}

import AppLogoIcon from './app-logo-icon';
import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime';

export default function AppLogo() {
    return (
        /*#__PURE__*/
        _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/
                _jsx('div', {
                    className:
                        'flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground',
                    /*#__PURE__*/
                    children: _jsx(AppLogoIcon, {
                        className:
                            'size-5 fill-current text-white dark:text-black',
                    }),
                }) /*#__PURE__*/,
                _jsx('div', {
                    className: 'ml-1 grid flex-1 text-left text-sm',
                    /*#__PURE__*/
                    children: _jsx('span', {
                        className:
                            'mb-0.5 truncate leading-tight font-semibold',
                        children: 'Laravel Starter Kit',
                    }),
                }),
            ],
        })
    );
}

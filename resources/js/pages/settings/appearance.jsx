import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

import { edit as editAppearance } from '@/routes/appearance';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const breadcrumbs = [
    {
        title: 'Appearance settings',
        href: editAppearance().url,
    },
];

export default function Appearance() {
    return (
        /*#__PURE__*/
        _jsxs(AppLayout, {
            breadcrumbs: breadcrumbs,
            children: [
                /*#__PURE__*/
                _jsx(Head, { title: 'Appearance settings' }) /*#__PURE__*/,

                _jsx('h1', {
                    className: 'sr-only',
                    children: 'Appearance Settings',
                }) /*#__PURE__*/,

                _jsx(SettingsLayout, {
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        className: 'space-y-6',
                        children: [
                            /*#__PURE__*/
                            _jsx(Heading, {
                                variant: 'small',
                                title: 'Appearance settings',
                                description:
                                    "Update your account's appearance settings",
                            }) /*#__PURE__*/,
                            _jsx(AppearanceTabs, {}),
                        ],
                    }),
                }),
            ],
        })
    );
}

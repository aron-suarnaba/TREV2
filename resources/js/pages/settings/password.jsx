import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import { edit } from '@/routes/user-password';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

const breadcrumbs = [
    {
        title: 'Password settings',
        href: edit().url,
    },
];

export default function Password() {
    const passwordInput = useRef(null);
    const currentPasswordInput = useRef(null);

    return (
        /*#__PURE__*/
        _jsxs(AppLayout, {
            breadcrumbs: breadcrumbs,
            children: [
                /*#__PURE__*/
                _jsx(Head, { title: 'Password settings' }) /*#__PURE__*/,

                _jsx('h1', {
                    className: 'sr-only',
                    children: 'Password Settings',
                }) /*#__PURE__*/,

                _jsx(SettingsLayout, {
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        className: 'space-y-6',
                        children: [
                            /*#__PURE__*/
                            _jsx(Heading, {
                                variant: 'small',
                                title: 'Update password',
                                description:
                                    'Ensure your account is using a long, random password to stay secure',
                            }) /*#__PURE__*/,

                            _jsx(Form, {
                                ...PasswordController.update.form(),
                                options: {
                                    preserveScroll: true,
                                },
                                resetOnError: [
                                    'password',
                                    'password_confirmation',
                                    'current_password',
                                ],

                                resetOnSuccess: true,
                                onError: (errors) => {
                                    if (errors.password) {
                                        passwordInput.current?.focus();
                                    }

                                    if (errors.current_password) {
                                        currentPasswordInput.current?.focus();
                                    }
                                },
                                className: 'space-y-6',
                                children: (
                                    {
                                        errors,
                                        processing,
                                        recentlySuccessful,
                                    } /*#__PURE__*/,
                                ) =>
                                    _jsxs(_Fragment, {
                                        children: [
                                            /*#__PURE__*/
                                            _jsxs('div', {
                                                className: 'grid gap-2',
                                                children: [
                                                    /*#__PURE__*/
                                                    _jsx(Label, {
                                                        htmlFor:
                                                            'current_password',
                                                        children:
                                                            'Current password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(Input, {
                                                        id: 'current_password',
                                                        ref: currentPasswordInput,
                                                        name: 'current_password',
                                                        type: 'password',
                                                        className:
                                                            'mt-1 block w-full',
                                                        autoComplete:
                                                            'current-password',
                                                        placeholder:
                                                            'Current password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(InputError, {
                                                        message:
                                                            errors.current_password,
                                                    }),
                                                ],
                                            }) /*#__PURE__*/,

                                            _jsxs('div', {
                                                className: 'grid gap-2',
                                                children: [
                                                    /*#__PURE__*/
                                                    _jsx(Label, {
                                                        htmlFor: 'password',
                                                        children:
                                                            'New password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(Input, {
                                                        id: 'password',
                                                        ref: passwordInput,
                                                        name: 'password',
                                                        type: 'password',
                                                        className:
                                                            'mt-1 block w-full',
                                                        autoComplete:
                                                            'new-password',
                                                        placeholder:
                                                            'New password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(InputError, {
                                                        message:
                                                            errors.password,
                                                    }),
                                                ],
                                            }) /*#__PURE__*/,

                                            _jsxs('div', {
                                                className: 'grid gap-2',
                                                children: [
                                                    /*#__PURE__*/
                                                    _jsx(Label, {
                                                        htmlFor:
                                                            'password_confirmation',
                                                        children:
                                                            'Confirm password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(Input, {
                                                        id: 'password_confirmation',
                                                        name: 'password_confirmation',
                                                        type: 'password',
                                                        className:
                                                            'mt-1 block w-full',
                                                        autoComplete:
                                                            'new-password',
                                                        placeholder:
                                                            'Confirm password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(InputError, {
                                                        message:
                                                            errors.password_confirmation,
                                                    }),
                                                ],
                                            }) /*#__PURE__*/,

                                            _jsxs('div', {
                                                className:
                                                    'flex items-center gap-4',
                                                children: [
                                                    /*#__PURE__*/
                                                    _jsx(Button, {
                                                        disabled: processing,
                                                        'data-test':
                                                            'update-password-button',
                                                        children:
                                                            'Save password',
                                                    }) /*#__PURE__*/,

                                                    _jsx(Transition, {
                                                        show: recentlySuccessful,
                                                        enter: 'transition ease-in-out',
                                                        enterFrom: 'opacity-0',
                                                        leave: 'transition ease-in-out',
                                                        leaveTo: 'opacity-0',
                                                        /*#__PURE__*/

                                                        children: _jsx('p', {
                                                            className:
                                                                'text-sm text-neutral-600',
                                                            children: 'Saved',
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}

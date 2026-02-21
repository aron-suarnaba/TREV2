import { Transition } from '@headlessui/react';
import { Form, Head, Link, usePage } from '@inertiajs/react';
import DeleteUser from '@/components/delete-user';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { edit } from '@/routes/profile';
import { send } from '@/routes/verification';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

const breadcrumbs = [
    {
        title: 'Profile settings',
        href: edit().url,
    },
];

export default function Profile({ mustVerifyEmail, status }) {
    const { auth } = usePage().props;

    return (
        /*#__PURE__*/
        _jsxs(AppLayout, {
            breadcrumbs: breadcrumbs,
            children: [
                /*#__PURE__*/
                _jsx(Head, { title: 'Profile settings' }) /*#__PURE__*/,

                _jsx('h1', {
                    className: 'sr-only',
                    children: 'Profile Settings',
                }) /*#__PURE__*/,

                _jsxs(SettingsLayout, {
                    children: [
                        /*#__PURE__*/
                        _jsxs('div', {
                            className: 'space-y-6',
                            children: [
                                /*#__PURE__*/
                                _jsx(Heading, {
                                    variant: 'small',
                                    title: 'Profile information',
                                    description:
                                        'Update your name and email address',
                                }) /*#__PURE__*/,

                                _jsx(Form, {
                                    ...ProfileController.update.form(),
                                    options: {
                                        preserveScroll: true,
                                    },
                                    className: 'space-y-6',
                                    children: (
                                        {
                                            processing,
                                            recentlySuccessful,
                                            errors,
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
                                                            htmlFor: 'name',
                                                            children: 'Name',
                                                        }) /*#__PURE__*/,

                                                        _jsx(Input, {
                                                            id: 'name',
                                                            className:
                                                                'mt-1 block w-full',
                                                            defaultValue:
                                                                auth.user.name,
                                                            name: 'name',
                                                            required: true,
                                                            autoComplete:
                                                                'name',
                                                            placeholder:
                                                                'Full name',
                                                        }) /*#__PURE__*/,

                                                        _jsx(InputError, {
                                                            className: 'mt-2',
                                                            message:
                                                                errors.name,
                                                        }),
                                                    ],
                                                }) /*#__PURE__*/,

                                                _jsxs('div', {
                                                    className: 'grid gap-2',
                                                    children: [
                                                        /*#__PURE__*/
                                                        _jsx(Label, {
                                                            htmlFor: 'email',
                                                            children:
                                                                'Email address',
                                                        }) /*#__PURE__*/,

                                                        _jsx(Input, {
                                                            id: 'email',
                                                            type: 'email',
                                                            className:
                                                                'mt-1 block w-full',
                                                            defaultValue:
                                                                auth.user.email,
                                                            name: 'email',
                                                            required: true,
                                                            autoComplete:
                                                                'username',
                                                            placeholder:
                                                                'Email address',
                                                        }) /*#__PURE__*/,

                                                        _jsx(InputError, {
                                                            className: 'mt-2',
                                                            message:
                                                                errors.email,
                                                        }),
                                                    ],
                                                }),

                                                mustVerifyEmail &&
                                                    auth.user
                                                        .email_verified_at ===
                                                        null /*#__PURE__*/ &&
                                                    _jsxs('div', {
                                                        children: [
                                                            /*#__PURE__*/
                                                            _jsxs('p', {
                                                                className:
                                                                    '-mt-4 text-sm text-muted-foreground',
                                                                children: [
                                                                    'Your email address is unverified.',

                                                                    ' ' /*#__PURE__*/,
                                                                    _jsx(Link, {
                                                                        href: send(),
                                                                        as: 'button',
                                                                        className:
                                                                            'text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500',
                                                                        children:
                                                                            'Click here to resend the verification email.',
                                                                    }),
                                                                ],
                                                            }),

                                                            status ===
                                                                'verification-link-sent' /*#__PURE__*/ &&
                                                                _jsx('div', {
                                                                    className:
                                                                        'mt-2 text-sm font-medium text-green-600',
                                                                    children:
                                                                        'A new verification link has been sent to your email address.',
                                                                }),
                                                        ],
                                                    }) /*#__PURE__*/,

                                                _jsxs('div', {
                                                    className:
                                                        'flex items-center gap-4',
                                                    children: [
                                                        /*#__PURE__*/
                                                        _jsx(Button, {
                                                            disabled:
                                                                processing,
                                                            'data-test':
                                                                'update-profile-button',
                                                            children: 'Save',
                                                        }) /*#__PURE__*/,

                                                        _jsx(Transition, {
                                                            show: recentlySuccessful,
                                                            enter: 'transition ease-in-out',
                                                            enterFrom:
                                                                'opacity-0',
                                                            leave: 'transition ease-in-out',
                                                            leaveTo:
                                                                'opacity-0',
                                                            /*#__PURE__*/

                                                            children: _jsx(
                                                                'p',
                                                                {
                                                                    className:
                                                                        'text-sm text-neutral-600',
                                                                    children:
                                                                        'Saved',
                                                                },
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }) /*#__PURE__*/,

                        _jsx(DeleteUser, {}),
                    ],
                }),
            ],
        })
    );
}

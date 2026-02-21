import { Form } from '@inertiajs/react';
import { useRef } from 'react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function DeleteUser() {
    const passwordInput = useRef(null);

    return (
        /*#__PURE__*/
        _jsxs('div', {
            className: 'space-y-6',
            children: [
                /*#__PURE__*/
                _jsx(Heading, {
                    variant: 'small',
                    title: 'Delete account',
                    description: 'Delete your account and all of its resources',
                }) /*#__PURE__*/,
                _jsxs('div', {
                    className:
                        'space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10',
                    children: [
                        /*#__PURE__*/
                        _jsxs('div', {
                            className:
                                'relative space-y-0.5 text-red-600 dark:text-red-100',
                            children: [
                                /*#__PURE__*/
                                _jsx('p', {
                                    className: 'font-medium',
                                    children: 'Warning',
                                }) /*#__PURE__*/,
                                _jsx('p', {
                                    className: 'text-sm',
                                    children:
                                        'Please proceed with caution, this cannot be undone.',
                                }),
                            ],
                        }) /*#__PURE__*/,

                        _jsxs(Dialog, {
                            children: [
                                /*#__PURE__*/
                                _jsx(DialogTrigger, {
                                    asChild: true,
                                    /*#__PURE__*/
                                    children: _jsx(Button, {
                                        variant: 'destructive',
                                        'data-test': 'delete-user-button',
                                        children: 'Delete account',
                                    }),
                                }) /*#__PURE__*/,
                                _jsxs(DialogContent, {
                                    children: [
                                        /*#__PURE__*/
                                        _jsx(DialogTitle, {
                                            children:
                                                'Are you sure you want to delete your account?',
                                        }) /*#__PURE__*/,
                                        _jsx(DialogDescription, {
                                            children:
                                                'Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.',
                                        }) /*#__PURE__*/,

                                        _jsx(Form, {
                                            ...ProfileController.destroy.form(),
                                            options: {
                                                preserveScroll: true,
                                            },
                                            onError: () =>
                                                passwordInput.current?.focus(),
                                            resetOnSuccess: true,
                                            className: 'space-y-6',
                                            children: (
                                                {
                                                    resetAndClearErrors,
                                                    processing,
                                                    errors,
                                                } /*#__PURE__*/,
                                            ) =>
                                                _jsxs(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/
                                                        _jsxs('div', {
                                                            className:
                                                                'grid gap-2',
                                                            children: [
                                                                /*#__PURE__*/
                                                                _jsx(Label, {
                                                                    htmlFor:
                                                                        'password',
                                                                    className:
                                                                        'sr-only',
                                                                    children:
                                                                        'Password',
                                                                }) /*#__PURE__*/,

                                                                _jsx(Input, {
                                                                    id: 'password',
                                                                    type: 'password',
                                                                    name: 'password',
                                                                    ref: passwordInput,
                                                                    placeholder:
                                                                        'Password',
                                                                    autoComplete:
                                                                        'current-password',
                                                                }) /*#__PURE__*/,

                                                                _jsx(
                                                                    InputError,
                                                                    {
                                                                        message:
                                                                            errors.password,
                                                                    },
                                                                ),
                                                            ],
                                                        }) /*#__PURE__*/,

                                                        _jsxs(DialogFooter, {
                                                            className: 'gap-2',
                                                            children: [
                                                                /*#__PURE__*/
                                                                _jsx(
                                                                    DialogClose,
                                                                    {
                                                                        asChild: true,
                                                                        /*#__PURE__*/
                                                                        children:
                                                                            _jsx(
                                                                                Button,
                                                                                {
                                                                                    variant:
                                                                                        'secondary',
                                                                                    onClick:
                                                                                        () =>
                                                                                            resetAndClearErrors(),
                                                                                    children:
                                                                                        'Cancel',
                                                                                },
                                                                            ),
                                                                    },
                                                                ) /*#__PURE__*/,

                                                                _jsx(Button, {
                                                                    variant:
                                                                        'destructive',
                                                                    disabled:
                                                                        processing,
                                                                    asChild: true,
                                                                    /*#__PURE__*/

                                                                    children:
                                                                        _jsx(
                                                                            'button',
                                                                            {
                                                                                type: 'submit',
                                                                                'data-test':
                                                                                    'confirm-delete-user-button',
                                                                                children:
                                                                                    'Delete account',
                                                                            },
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}

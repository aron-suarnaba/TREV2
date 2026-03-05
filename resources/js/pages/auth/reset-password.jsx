import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { update } from '@/routes/password';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function ResetPassword({ token, email }) {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Reset password',
            description: 'Please enter your new password below',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Reset password' }) /*#__PURE__*/,

                _jsx(Form, {
                    action: update().url,
                    method: update().method,
                    transform: (data) => ({ ...data, token, email }),
                    resetOnSuccess: ['password', 'password_confirmation'],
                    children: ({ processing, errors } /*#__PURE__*/) =>
                        _jsxs('div', {
                            className: 'grid gap-6',
                            children: [
                                /*#__PURE__*/
                                _jsxs('div', {
                                    className: 'grid gap-2',
                                    children: [
                                        /*#__PURE__*/
                                        _jsx(Label, {
                                            htmlFor: 'email',
                                            children: 'Email',
                                        }) /*#__PURE__*/,
                                        _jsx(Input, {
                                            id: 'email',
                                            type: 'email',
                                            name: 'email',
                                            autoComplete: 'email',
                                            value: email,
                                            className: 'mt-1 block w-full',
                                            readOnly: true,
                                        }) /*#__PURE__*/,
                                        _jsx(InputError, {
                                            message: errors.email,
                                            className: 'mt-2',
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsxs('div', {
                                    className: 'grid gap-2',
                                    children: [
                                        /*#__PURE__*/
                                        _jsx(Label, {
                                            htmlFor: 'password',
                                            children: 'Password',
                                        }) /*#__PURE__*/,
                                        _jsx(Input, {
                                            id: 'password',
                                            type: 'password',
                                            name: 'password',
                                            autoComplete: 'new-password',
                                            className: 'mt-1 block w-full',
                                            autoFocus: true,
                                            placeholder: 'Password',
                                        }) /*#__PURE__*/,
                                        _jsx(InputError, {
                                            message: errors.password,
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsxs('div', {
                                    className: 'grid gap-2',
                                    children: [
                                        /*#__PURE__*/
                                        _jsx(Label, {
                                            htmlFor: 'password_confirmation',
                                            children: 'Confirm password',
                                        }) /*#__PURE__*/,
                                        _jsx(Input, {
                                            id: 'password_confirmation',
                                            type: 'password',
                                            name: 'password_confirmation',
                                            autoComplete: 'new-password',
                                            className: 'mt-1 block w-full',
                                            placeholder: 'Confirm password',
                                        }) /*#__PURE__*/,
                                        _jsx(InputError, {
                                            message:
                                                errors.password_confirmation,
                                            className: 'mt-2',
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsxs(Button, {
                                    type: 'submit',
                                    className: 'mt-4 w-full',
                                    disabled: processing,
                                    'data-test': 'reset-password-button',
                                    children: [
                                        processing &&
                                            /*#__PURE__*/ _jsx(Spinner, {}),
                                        'Reset password',
                                    ],
                                }),
                            ],
                        }),
                }),
            ],
        })
    );
}

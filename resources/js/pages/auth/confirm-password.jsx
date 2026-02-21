import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/password/confirm';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function ConfirmPassword() {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Confirm your password',
            description:
                'This is a secure area of the application. Please confirm your password before continuing.',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Confirm password' }) /*#__PURE__*/,

                _jsx(Form, {
                    ...store.form(),
                    resetOnSuccess: ['password'],
                    children: ({ processing, errors } /*#__PURE__*/) =>
                        _jsxs('div', {
                            className: 'space-y-6',
                            children: [
                                /*#__PURE__*/
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
                                            placeholder: 'Password',
                                            autoComplete: 'current-password',
                                            autoFocus: true,
                                        }) /*#__PURE__*/,

                                        _jsx(InputError, {
                                            message: errors.password,
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsx('div', {
                                    className: 'flex items-center',
                                    /*#__PURE__*/
                                    children: _jsxs(Button, {
                                        className: 'w-full',
                                        disabled: processing,
                                        'data-test': 'confirm-password-button',
                                        children: [
                                            processing &&
                                                /*#__PURE__*/ _jsx(Spinner, {}),
                                            'Confirm password',
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

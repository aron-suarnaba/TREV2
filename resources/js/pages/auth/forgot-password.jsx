// Components
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { email } from '@/routes/password';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function ForgotPassword({ status }) {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Forgot password',
            description: 'Enter your email to receive a password reset link',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Forgot password' }),

                status /*#__PURE__*/ &&
                    _jsx('div', {
                        className:
                            'mb-4 text-center text-sm font-medium text-green-600',
                        children: status,
                    }) /*#__PURE__*/,

                _jsxs('div', {
                    className: 'space-y-6',
                    children: [
                        /*#__PURE__*/
                        _jsx(Form, {
                            ...email.form(),
                            children: ({ processing, errors } /*#__PURE__*/) =>
                                _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/
                                        _jsxs('div', {
                                            className: 'grid gap-2',
                                            children: [
                                                /*#__PURE__*/
                                                _jsx(Label, {
                                                    htmlFor: 'email',
                                                    children: 'Email address',
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'email',
                                                    type: 'email',
                                                    name: 'email',
                                                    autoComplete: 'off',
                                                    autoFocus: true,
                                                    placeholder:
                                                        'email@example.com',
                                                }) /*#__PURE__*/,

                                                _jsx(InputError, {
                                                    message: errors.email,
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

                                        _jsx('div', {
                                            className:
                                                'my-6 flex items-center justify-start',
                                            /*#__PURE__*/
                                            children: _jsxs(Button, {
                                                className: 'w-full',
                                                disabled: processing,
                                                'data-test':
                                                    'email-password-reset-link-button',
                                                children: [
                                                    processing /*#__PURE__*/ &&
                                                        _jsx(LoaderCircle, {
                                                            className:
                                                                'h-4 w-4 animate-spin',
                                                        }),
                                                    'Email password reset link',
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                        }) /*#__PURE__*/,

                        _jsxs('div', {
                            className:
                                'space-x-1 text-center text-sm text-muted-foreground',
                            children: [
                                /*#__PURE__*/
                                _jsx('span', {
                                    children: 'Or, return to',
                                }) /*#__PURE__*/,
                                _jsx(TextLink, {
                                    href: login(),
                                    children: 'log in',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}

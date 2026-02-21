import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function Login({ status, canResetPassword, canRegister }) {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Log in to your account',
            description: 'Enter your email and password below to log in',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Log in' }) /*#__PURE__*/,

                _jsx(Form, {
                    ...store.form(),
                    resetOnSuccess: ['password'],
                    className: 'flex flex-col gap-6',
                    children: ({ processing, errors } /*#__PURE__*/) =>
                        _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/
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
                                                    children: 'Email address',
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'email',
                                                    type: 'email',
                                                    name: 'email',
                                                    required: true,
                                                    autoFocus: true,
                                                    tabIndex: 1,
                                                    autoComplete: 'email',
                                                    placeholder:
                                                        'email@example.com',
                                                }) /*#__PURE__*/,
                                                _jsx(InputError, {
                                                    message: errors.email,
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

                                        _jsxs('div', {
                                            className: 'grid gap-2',
                                            children: [
                                                /*#__PURE__*/
                                                _jsxs('div', {
                                                    className:
                                                        'flex items-center',
                                                    children: [
                                                        /*#__PURE__*/
                                                        _jsx(Label, {
                                                            htmlFor: 'password',
                                                            children:
                                                                'Password',
                                                        }),
                                                        canResetPassword /*#__PURE__*/ &&
                                                            _jsx(TextLink, {
                                                                href: request(),
                                                                className:
                                                                    'ml-auto text-sm',
                                                                tabIndex: 5,
                                                                children:
                                                                    'Forgot password?',
                                                            }),
                                                    ],
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'password',
                                                    type: 'password',
                                                    name: 'password',
                                                    required: true,
                                                    tabIndex: 2,
                                                    autoComplete:
                                                        'current-password',
                                                    placeholder: 'Password',
                                                }) /*#__PURE__*/,
                                                _jsx(InputError, {
                                                    message: errors.password,
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

                                        _jsxs('div', {
                                            className:
                                                'flex items-center space-x-3',
                                            children: [
                                                /*#__PURE__*/
                                                _jsx(Checkbox, {
                                                    id: 'remember',
                                                    name: 'remember',
                                                    tabIndex: 3,
                                                }) /*#__PURE__*/,
                                                _jsx(Label, {
                                                    htmlFor: 'remember',
                                                    children: 'Remember me',
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

                                        _jsxs(Button, {
                                            type: 'submit',
                                            className: 'mt-4 w-full',
                                            tabIndex: 4,
                                            disabled: processing,
                                            'data-test': 'login-button',
                                            children: [
                                                processing &&
                                                    /*#__PURE__*/ _jsx(
                                                        Spinner,
                                                        {},
                                                    ),
                                                'Log in',
                                            ],
                                        }),
                                    ],
                                }),

                                canRegister /*#__PURE__*/ &&
                                    _jsxs('div', {
                                        className:
                                            'text-center text-sm text-muted-foreground',
                                        children: [
                                            "Don't have an account?",
                                            ' ' /*#__PURE__*/,
                                            _jsx(TextLink, {
                                                href: register(),
                                                tabIndex: 5,
                                                children: 'Sign up',
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                }),

                status /*#__PURE__*/ &&
                    _jsx('div', {
                        className:
                            'mb-4 text-center text-sm font-medium text-green-600',
                        children: status,
                    }),
            ],
        })
    );
}

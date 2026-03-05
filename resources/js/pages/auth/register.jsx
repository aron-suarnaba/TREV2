import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function Register() {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Create an account',
            description: 'Enter your details below to create your account',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Register' }) /*#__PURE__*/,
                _jsx(Form, {
                    action: store().url,
                    method: store().method,
                    resetOnSuccess: ['password', 'password_confirmation'],
                    disableWhileProcessing: true,
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
                                                    htmlFor: 'name',
                                                    children: 'Name',
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'name',
                                                    type: 'text',
                                                    required: true,
                                                    autoFocus: true,
                                                    tabIndex: 1,
                                                    autoComplete: 'name',
                                                    name: 'name',
                                                    placeholder: 'Full name',
                                                }) /*#__PURE__*/,
                                                _jsx(InputError, {
                                                    message: errors.name,
                                                    className: 'mt-2',
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

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
                                                    required: true,
                                                    tabIndex: 2,
                                                    autoComplete: 'email',
                                                    name: 'email',
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
                                                _jsx(Label, {
                                                    htmlFor: 'password',
                                                    children: 'Password',
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'password',
                                                    type: 'password',
                                                    required: true,
                                                    tabIndex: 3,
                                                    autoComplete:
                                                        'new-password',
                                                    name: 'password',
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
                                                    htmlFor:
                                                        'password_confirmation',
                                                    children:
                                                        'Confirm password',
                                                }) /*#__PURE__*/,
                                                _jsx(Input, {
                                                    id: 'password_confirmation',
                                                    type: 'password',
                                                    required: true,
                                                    tabIndex: 4,
                                                    autoComplete:
                                                        'new-password',
                                                    name: 'password_confirmation',
                                                    placeholder:
                                                        'Confirm password',
                                                }) /*#__PURE__*/,
                                                _jsx(InputError, {
                                                    message:
                                                        errors.password_confirmation,
                                                }),
                                            ],
                                        }) /*#__PURE__*/,

                                        _jsxs(Button, {
                                            type: 'submit',
                                            className: 'mt-2 w-full',
                                            tabIndex: 5,
                                            'data-test': 'register-user-button',
                                            children: [
                                                processing &&
                                                    /*#__PURE__*/ _jsx(
                                                        Spinner,
                                                        {},
                                                    ),
                                                'Create account',
                                            ],
                                        }),
                                    ],
                                }) /*#__PURE__*/,

                                _jsxs('div', {
                                    className:
                                        'text-center text-sm text-muted-foreground',
                                    children: [
                                        'Already have an account?',
                                        ' ' /*#__PURE__*/,
                                        _jsx(TextLink, {
                                            href: login(),
                                            tabIndex: 6,
                                            children: 'Log in',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
            ],
        })
    );
}

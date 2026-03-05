// Components
import { Form, Head } from '@inertiajs/react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { logout } from '@/routes';
import { send } from '@/routes/verification';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function VerifyEmail({ status }) {
    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: 'Verify email',
            description:
                'Please verify your email address by clicking on the link we just emailed to you.',
            children: [
                /*#__PURE__*/

                _jsx(Head, { title: 'Email verification' }),

                status === 'verification-link-sent' /*#__PURE__*/ &&
                    _jsx('div', {
                        className:
                            'mb-4 text-center text-sm font-medium text-green-600',
                        children:
                            'A new verification link has been sent to the email address you provided during registration.',
                    }) /*#__PURE__*/,

                _jsx(Form, {
                    action: send().url,
                    method: send().method,
                    className: 'space-y-6 text-center',
                    children: ({ processing } /*#__PURE__*/) =>
                        _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/
                                _jsxs(Button, {
                                    disabled: processing,
                                    variant: 'secondary',
                                    children: [
                                        processing &&
                                            /*#__PURE__*/ _jsx(Spinner, {}),
                                        'Resend verification email',
                                    ],
                                }) /*#__PURE__*/,

                                _jsx(TextLink, {
                                    href: logout(),
                                    method: 'post',
                                    as: 'button',
                                    className: 'mx-auto block text-sm',
                                    children: 'Log out',
                                }),
                            ],
                        }),
                }),
            ],
        })
    );
}

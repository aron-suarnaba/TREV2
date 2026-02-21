import { Form, Head } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useMemo, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/two-factor/login';
import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime';

export default function TwoFactorChallenge() {
    const [showRecoveryInput, setShowRecoveryInput] = useState(false);
    const [code, setCode] = useState('');

    const authConfigContent = useMemo(() => {
        if (showRecoveryInput) {
            return {
                title: 'Recovery Code',
                description:
                    'Please confirm access to your account by entering one of your emergency recovery codes.',
                toggleText: 'login using an authentication code',
            };
        }

        return {
            title: 'Authentication Code',
            description:
                'Enter the authentication code provided by your authenticator application.',
            toggleText: 'login using a recovery code',
        };
    }, [showRecoveryInput]);

    const toggleRecoveryMode = (clearErrors) => {
        setShowRecoveryInput(!showRecoveryInput);
        clearErrors();
        setCode('');
    };

    return (
        /*#__PURE__*/
        _jsxs(AuthLayout, {
            title: authConfigContent.title,
            description: authConfigContent.description,
            children: [
                /*#__PURE__*/

                _jsx(Head, {
                    title: 'Two-Factor Authentication',
                }) /*#__PURE__*/,

                _jsx('div', {
                    className: 'space-y-6',
                    /*#__PURE__*/
                    children: _jsx(Form, {
                        ...store.form(),
                        className: 'space-y-4',
                        resetOnError: true,
                        resetOnSuccess: !showRecoveryInput,
                        children: (
                            { errors, processing, clearErrors } /*#__PURE__*/,
                        ) =>
                            _jsxs(_Fragment, {
                                children: [
                                    showRecoveryInput /*#__PURE__*/
                                        ? _jsxs(_Fragment, {
                                              children: [
                                                  /*#__PURE__*/
                                                  _jsx(Input, {
                                                      name: 'recovery_code',
                                                      type: 'text',
                                                      placeholder:
                                                          'Enter recovery code',
                                                      autoFocus:
                                                          showRecoveryInput,
                                                      required: true,
                                                  }) /*#__PURE__*/,
                                                  _jsx(InputError, {
                                                      message:
                                                          errors.recovery_code,
                                                  }),
                                              ],
                                          }) /*#__PURE__*/
                                        : _jsxs('div', {
                                              className:
                                                  'flex flex-col items-center justify-center space-y-3 text-center',
                                              children: [
                                                  /*#__PURE__*/
                                                  _jsx('div', {
                                                      className:
                                                          'flex w-full items-center justify-center',
                                                      /*#__PURE__*/
                                                      children: _jsx(InputOTP, {
                                                          name: 'code',
                                                          maxLength:
                                                              OTP_MAX_LENGTH,
                                                          value: code,
                                                          onChange: (value) =>
                                                              setCode(value),
                                                          disabled: processing,
                                                          pattern:
                                                              REGEXP_ONLY_DIGITS,
                                                          /*#__PURE__*/

                                                          children: _jsx(
                                                              InputOTPGroup,
                                                              {
                                                                  children:
                                                                      Array.from(
                                                                          {
                                                                              length: OTP_MAX_LENGTH,
                                                                          },
                                                                          (
                                                                              _,
                                                                              index /*#__PURE__*/,
                                                                          ) =>
                                                                              _jsx(
                                                                                  InputOTPSlot,
                                                                                  {
                                                                                      index: index,
                                                                                  },
                                                                                  index,
                                                                              ),
                                                                      ),
                                                              },
                                                          ),
                                                      }),
                                                  }) /*#__PURE__*/,
                                                  _jsx(InputError, {
                                                      message: errors.code,
                                                  }),
                                              ],
                                          }) /*#__PURE__*/,

                                    _jsx(Button, {
                                        type: 'submit',
                                        className: 'w-full',
                                        disabled: processing,
                                        children: 'Continue',
                                    }) /*#__PURE__*/,

                                    _jsxs('div', {
                                        className:
                                            'text-center text-sm text-muted-foreground',
                                        children: [
                                            /*#__PURE__*/
                                            _jsx('span', {
                                                children: 'or you can ',
                                            }) /*#__PURE__*/,
                                            _jsx('button', {
                                                type: 'button',
                                                className:
                                                    'cursor-pointer text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500',
                                                onClick: () =>
                                                    toggleRecoveryMode(
                                                        clearErrors,
                                                    ),
                                                children:
                                                    authConfigContent.toggleText,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                }),
            ],
        })
    );
}

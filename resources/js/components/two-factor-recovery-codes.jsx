import { Form } from '@inertiajs/react';
import { Eye, EyeOff, LockKeyhole, RefreshCw } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AlertError from './alert-error';
import { regenerateRecoveryCodes } from '@/routes/two-factor';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export default function TwoFactorRecoveryCodes({
    recoveryCodesList,
    fetchRecoveryCodes,
    errors,
}) {
    const [codesAreVisible, setCodesAreVisible] = useState(false);
    const codesSectionRef = useRef(null);
    const canRegenerateCodes = recoveryCodesList.length > 0 && codesAreVisible;

    const toggleCodesVisibility = useCallback(async () => {
        if (!codesAreVisible && !recoveryCodesList.length) {
            await fetchRecoveryCodes();
        }

        setCodesAreVisible(!codesAreVisible);

        if (!codesAreVisible) {
            setTimeout(() => {
                codesSectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            });
        }
    }, [codesAreVisible, recoveryCodesList.length, fetchRecoveryCodes]);

    useEffect(() => {
        if (!recoveryCodesList.length) {
            fetchRecoveryCodes();
        }
    }, [recoveryCodesList.length, fetchRecoveryCodes]);

    const RecoveryCodeIconComponent = codesAreVisible ? EyeOff : Eye;

    return (
        /*#__PURE__*/
        _jsxs(Card, {
            children: [
                /*#__PURE__*/
                _jsxs(CardHeader, {
                    children: [
                        /*#__PURE__*/
                        _jsxs(CardTitle, {
                            className: 'flex gap-3',
                            children: [
                                /*#__PURE__*/
                                _jsx(LockKeyhole, {
                                    className: 'size-4',
                                    'aria-hidden': 'true',
                                }),
                                '2FA Recovery Codes',
                            ],
                        }) /*#__PURE__*/,
                        _jsx(CardDescription, {
                            children:
                                'Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager.',
                        }),
                    ],
                }) /*#__PURE__*/,
                _jsxs(CardContent, {
                    children: [
                        /*#__PURE__*/
                        _jsxs('div', {
                            className:
                                'flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between',
                            children: [
                                /*#__PURE__*/
                                _jsxs(Button, {
                                    onClick: toggleCodesVisibility,
                                    className: 'w-fit',
                                    'aria-expanded': codesAreVisible,
                                    'aria-controls': 'recovery-codes-section',
                                    children: [
                                        /*#__PURE__*/

                                        _jsx(RecoveryCodeIconComponent, {
                                            className: 'size-4',
                                            'aria-hidden': 'true',
                                        }),
                                        codesAreVisible ? 'Hide' : 'View',
                                        ' Recovery Codes',
                                    ],
                                }),

                                canRegenerateCodes /*#__PURE__*/ &&
                                    _jsx(Form, {
                                        ...regenerateRecoveryCodes.form(),
                                        options: { preserveScroll: true },
                                        onSuccess: fetchRecoveryCodes,
                                        children: (
                                            { processing } /*#__PURE__*/,
                                        ) =>
                                            _jsxs(Button, {
                                                variant: 'secondary',
                                                type: 'submit',
                                                disabled: processing,
                                                'aria-describedby':
                                                    'regenerate-warning',
                                                children: [
                                                    /*#__PURE__*/

                                                    _jsx(RefreshCw, {}),
                                                    ' Regenerate Codes',
                                                ],
                                            }),
                                    }),
                            ],
                        }) /*#__PURE__*/,
                        _jsx('div', {
                            id: 'recovery-codes-section',
                            className: `relative overflow-hidden transition-all duration-300 ${codesAreVisible ? 'h-auto opacity-100' : 'h-0 opacity-0'}`,
                            'aria-hidden': !codesAreVisible,
                            /*#__PURE__*/

                            children: _jsx('div', {
                                className: 'mt-3 space-y-3',
                                children: errors?.length /*#__PURE__*/
                                    ? _jsx(AlertError, {
                                          errors: errors,
                                      }) /*#__PURE__*/
                                    : _jsxs(_Fragment, {
                                          children: [
                                              /*#__PURE__*/
                                              _jsx('div', {
                                                  ref: codesSectionRef,
                                                  className:
                                                      'grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm',
                                                  role: 'list',
                                                  'aria-label':
                                                      'Recovery codes',
                                                  children:
                                                      recoveryCodesList.length
                                                          ? recoveryCodesList.map(
                                                                (
                                                                    code,
                                                                    index /*#__PURE__*/,
                                                                ) =>
                                                                    _jsx(
                                                                        'div',
                                                                        {
                                                                            role: 'listitem',
                                                                            className:
                                                                                'select-text',
                                                                            children:
                                                                                code,
                                                                        },
                                                                        index,
                                                                    ),
                                                            ) /*#__PURE__*/
                                                          : _jsx('div', {
                                                                className:
                                                                    'space-y-2',
                                                                'aria-label':
                                                                    'Loading recovery codes',
                                                                children:
                                                                    Array.from(
                                                                        {
                                                                            length: 8,
                                                                        },
                                                                        (
                                                                            _,
                                                                            index /*#__PURE__*/,
                                                                        ) =>
                                                                            _jsx(
                                                                                'div',
                                                                                {
                                                                                    className:
                                                                                        'h-4 animate-pulse rounded bg-muted-foreground/20',
                                                                                    'aria-hidden':
                                                                                        'true',
                                                                                },
                                                                                index,
                                                                            ),
                                                                    ),
                                                            }),
                                              }) /*#__PURE__*/,

                                              _jsx('div', {
                                                  className:
                                                      'text-xs text-muted-foreground select-none',
                                                  /*#__PURE__*/
                                                  children: _jsxs('p', {
                                                      id: 'regenerate-warning',
                                                      children: [
                                                          'Each recovery code can be used once to access your account and will be removed after use. If you need more, click',

                                                          ' ' /*#__PURE__*/,
                                                          _jsx('span', {
                                                              className:
                                                                  'font-bold',
                                                              children:
                                                                  'Regenerate Codes',
                                                          }),
                                                          ' ',
                                                          'above.',
                                                      ],
                                                  }),
                                              }),
                                          ],
                                      }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}

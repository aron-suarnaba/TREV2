import { Form } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Check, Copy, ScanLine } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { useAppearance } from '@/hooks/use-appearance';
import { useClipboard } from '@/hooks/use-clipboard';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import AlertError from './alert-error';
import { Spinner } from './ui/spinner';
import { confirm } from '@/routes/two-factor';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

function GridScanIcon() {
    return (
        /*#__PURE__*/
        _jsx('div', {
            className:
                'mb-3 rounded-full border border-border bg-card p-0.5 shadow-sm',
            /*#__PURE__*/
            children: _jsxs('div', {
                className:
                    'relative overflow-hidden rounded-full border border-border bg-muted p-2.5',
                children: [
                    /*#__PURE__*/
                    _jsx('div', {
                        className:
                            'absolute inset-0 grid grid-cols-5 opacity-50',
                        children: Array.from(
                            { length: 5 },
                            (_, i /*#__PURE__*/) =>
                                _jsx(
                                    'div',
                                    {
                                        className:
                                            'border-r border-border last:border-r-0',
                                    },
                                    `col-${i + 1}`,
                                ),
                        ),
                    }) /*#__PURE__*/,
                    _jsx('div', {
                        className:
                            'absolute inset-0 grid grid-rows-5 opacity-50',
                        children: Array.from(
                            { length: 5 },
                            (_, i /*#__PURE__*/) =>
                                _jsx(
                                    'div',
                                    {
                                        className:
                                            'border-b border-border last:border-b-0',
                                    },
                                    `row-${i + 1}`,
                                ),
                        ),
                    }) /*#__PURE__*/,
                    _jsx(ScanLine, {
                        className: 'relative z-20 size-6 text-foreground',
                    }),
                ],
            }),
        })
    );
}

function TwoFactorSetupStep({
    qrCodeSvg,
    manualSetupKey,
    buttonText,
    onNextStep,
    errors,
}) {
    const { resolvedAppearance } = useAppearance();
    const [copiedText, copy] = useClipboard();
    const IconComponent = copiedText === manualSetupKey ? Check : Copy;

    return (
        /*#__PURE__*/
        _jsx(_Fragment, {
            children: errors?.length /*#__PURE__*/
                ? _jsx(AlertError, { errors: errors }) /*#__PURE__*/
                : _jsxs(_Fragment, {
                      children: [
                          /*#__PURE__*/
                          _jsx('div', {
                              className:
                                  'mx-auto flex max-w-md overflow-hidden',
                              /*#__PURE__*/
                              children: _jsx('div', {
                                  className:
                                      'mx-auto aspect-square w-64 rounded-lg border border-border',
                                  /*#__PURE__*/
                                  children: _jsx('div', {
                                      className:
                                          'z-10 flex h-full w-full items-center justify-center p-5',
                                      children: qrCodeSvg /*#__PURE__*/
                                          ? _jsx('div', {
                                                className:
                                                    'aspect-square w-full rounded-lg bg-white p-2 [&_svg]:size-full',
                                                dangerouslySetInnerHTML: {
                                                    __html: qrCodeSvg,
                                                },
                                                style: {
                                                    filter:
                                                        resolvedAppearance ===
                                                        'dark'
                                                            ? 'invert(1) brightness(1.5)'
                                                            : undefined,
                                                },
                                            }) /*#__PURE__*/
                                          : _jsx(Spinner, {}),
                                  }),
                              }),
                          }) /*#__PURE__*/,

                          _jsx('div', {
                              className: 'flex w-full space-x-5',
                              /*#__PURE__*/
                              children: _jsx(Button, {
                                  className: 'w-full',
                                  onClick: onNextStep,
                                  children: buttonText,
                              }),
                          }) /*#__PURE__*/,

                          _jsxs('div', {
                              className:
                                  'relative flex w-full items-center justify-center',
                              children: [
                                  /*#__PURE__*/
                                  _jsx('div', {
                                      className:
                                          'absolute inset-0 top-1/2 h-px w-full bg-border',
                                  }) /*#__PURE__*/,
                                  _jsx('span', {
                                      className: 'relative bg-card px-2 py-1',
                                      children: 'or, enter the code manually',
                                  }),
                              ],
                          }) /*#__PURE__*/,

                          _jsx('div', {
                              className: 'flex w-full space-x-2',
                              /*#__PURE__*/
                              children: _jsx('div', {
                                  className:
                                      'flex w-full items-stretch overflow-hidden rounded-xl border border-border',
                                  children: !manualSetupKey /*#__PURE__*/
                                      ? _jsx('div', {
                                            className:
                                                'flex h-full w-full items-center justify-center bg-muted p-3',
                                            /*#__PURE__*/
                                            children: _jsx(Spinner, {}),
                                        }) /*#__PURE__*/
                                      : _jsxs(_Fragment, {
                                            children: [
                                                /*#__PURE__*/
                                                _jsx('input', {
                                                    type: 'text',
                                                    readOnly: true,
                                                    value: manualSetupKey,
                                                    className:
                                                        'h-full w-full bg-background p-3 text-foreground outline-none',
                                                }) /*#__PURE__*/,
                                                _jsx('button', {
                                                    onClick: () =>
                                                        copy(manualSetupKey),
                                                    className:
                                                        'border-l border-border px-3 hover:bg-muted',
                                                    /*#__PURE__*/

                                                    children: _jsx(
                                                        IconComponent,
                                                        { className: 'w-4' },
                                                    ),
                                                }),
                                            ],
                                        }),
                              }),
                          }),
                      ],
                  }),
        })
    );
}

function TwoFactorVerificationStep({ onClose, onBack }) {
    const [code, setCode] = useState('');
    const pinInputContainerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            pinInputContainerRef.current?.querySelector('input')?.focus();
        }, 0);
    }, []);

    return (
        /*#__PURE__*/
        _jsx(Form, {
            ...confirm.form(),
            onSuccess: () => onClose(),
            resetOnError: true,
            resetOnSuccess: true,
            children: ({ processing, errors } /*#__PURE__*/) =>
                _jsx(_Fragment, {
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        ref: pinInputContainerRef,
                        className: 'relative w-full space-y-3',
                        children: [
                            /*#__PURE__*/

                            _jsxs('div', {
                                className:
                                    'flex w-full flex-col items-center space-y-3 py-2',
                                children: [
                                    /*#__PURE__*/
                                    _jsx(InputOTP, {
                                        id: 'otp',
                                        name: 'code',
                                        maxLength: OTP_MAX_LENGTH,
                                        onChange: setCode,
                                        disabled: processing,
                                        pattern: REGEXP_ONLY_DIGITS,
                                        /*#__PURE__*/

                                        children: _jsx(InputOTPGroup, {
                                            children: Array.from(
                                                { length: OTP_MAX_LENGTH },
                                                (_, index /*#__PURE__*/) =>
                                                    _jsx(
                                                        InputOTPSlot,
                                                        {
                                                            index: index,
                                                        },
                                                        index,
                                                    ),
                                            ),
                                        }),
                                    }) /*#__PURE__*/,
                                    _jsx(InputError, {
                                        message:
                                            errors
                                                ?.confirmTwoFactorAuthentication
                                                ?.code,
                                    }),
                                ],
                            }) /*#__PURE__*/,

                            _jsxs('div', {
                                className: 'flex w-full space-x-5',
                                children: [
                                    /*#__PURE__*/
                                    _jsx(Button, {
                                        type: 'button',
                                        variant: 'outline',
                                        className: 'flex-1',
                                        onClick: onBack,
                                        disabled: processing,
                                        children: 'Back',
                                    }) /*#__PURE__*/,
                                    _jsx(Button, {
                                        type: 'submit',
                                        className: 'flex-1',
                                        disabled:
                                            processing ||
                                            code.length < OTP_MAX_LENGTH,
                                        children: 'Confirm',
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        })
    );
}

export default function TwoFactorSetupModal({
    isOpen,
    onClose,
    requiresConfirmation,
    twoFactorEnabled,
    qrCodeSvg,
    manualSetupKey,
    clearSetupData,
    fetchSetupData,
    errors,
}) {
    const [showVerificationStep, setShowVerificationStep] = useState(false);

    const modalConfig = useMemo(() => {
        if (twoFactorEnabled) {
            return {
                title: 'Two-Factor Authentication Enabled',
                description:
                    'Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.',
                buttonText: 'Close',
            };
        }

        if (showVerificationStep) {
            return {
                title: 'Verify Authentication Code',
                description:
                    'Enter the 6-digit code from your authenticator app',
                buttonText: 'Continue',
            };
        }

        return {
            title: 'Enable Two-Factor Authentication',
            description:
                'To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app',
            buttonText: 'Continue',
        };
    }, [twoFactorEnabled, showVerificationStep]);

    const handleModalNextStep = useCallback(() => {
        if (requiresConfirmation) {
            setShowVerificationStep(true);
            return;
        }

        clearSetupData();
        onClose();
    }, [requiresConfirmation, clearSetupData, onClose]);

    const resetModalState = useCallback(() => {
        setShowVerificationStep(false);

        if (twoFactorEnabled) {
            clearSetupData();
        }
    }, [twoFactorEnabled, clearSetupData]);

    useEffect(() => {
        if (isOpen && !qrCodeSvg) {
            fetchSetupData();
        }
    }, [isOpen, qrCodeSvg, fetchSetupData]);

    const handleClose = useCallback(() => {
        resetModalState();
        onClose();
    }, [onClose, resetModalState]);

    return (
        /*#__PURE__*/
        _jsx(Dialog, {
            open: isOpen,
            onOpenChange: (open) => !open && handleClose(),
            /*#__PURE__*/
            children: _jsxs(DialogContent, {
                className: 'sm:max-w-md',
                children: [
                    /*#__PURE__*/
                    _jsxs(DialogHeader, {
                        className: 'flex items-center justify-center',
                        children: [
                            /*#__PURE__*/ _jsx(GridScanIcon, {}) /*#__PURE__*/,
                            _jsx(DialogTitle, {
                                children: modalConfig.title,
                            }) /*#__PURE__*/,
                            _jsx(DialogDescription, {
                                className: 'text-center',
                                children: modalConfig.description,
                            }),
                        ],
                    }) /*#__PURE__*/,

                    _jsx('div', {
                        className: 'flex flex-col items-center space-y-5',
                        children: showVerificationStep /*#__PURE__*/
                            ? _jsx(TwoFactorVerificationStep, {
                                  onClose: onClose,
                                  onBack: () => setShowVerificationStep(false),
                              }) /*#__PURE__*/
                            : _jsx(TwoFactorSetupStep, {
                                  qrCodeSvg: qrCodeSvg,
                                  manualSetupKey: manualSetupKey,
                                  buttonText: modalConfig.buttonText,
                                  onNextStep: handleModalNextStep,
                                  errors: errors,
                              }),
                    }),
                ],
            }),
        })
    );
}

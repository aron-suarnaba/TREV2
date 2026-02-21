import { Form, Head } from '@inertiajs/react';
import { ShieldBan, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Heading from '@/components/heading';
import TwoFactorRecoveryCodes from '@/components/two-factor-recovery-codes';
import TwoFactorSetupModal from '@/components/two-factor-setup-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTwoFactorAuth } from '@/hooks/use-two-factor-auth';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

import { disable, enable, show } from '@/routes/two-factor';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const breadcrumbs = [
    {
        title: 'Two-Factor Authentication',
        href: show.url(),
    },
];

export default function TwoFactor({
    requiresConfirmation = false,
    twoFactorEnabled = false,
}) {
    const {
        qrCodeSvg,
        hasSetupData,
        manualSetupKey,
        clearSetupData,
        fetchSetupData,
        recoveryCodesList,
        fetchRecoveryCodes,
        errors,
    } = useTwoFactorAuth();
    const [showSetupModal, setShowSetupModal] = useState(false);

    return (
        /*#__PURE__*/
        _jsxs(AppLayout, {
            breadcrumbs: breadcrumbs,
            children: [
                /*#__PURE__*/
                _jsx(Head, {
                    title: 'Two-Factor Authentication',
                }) /*#__PURE__*/,

                _jsx('h1', {
                    className: 'sr-only',
                    children: 'Two-Factor Authentication Settings',
                }) /*#__PURE__*/,

                _jsx(SettingsLayout, {
                    /*#__PURE__*/
                    children: _jsxs('div', {
                        className: 'space-y-6',
                        children: [
                            /*#__PURE__*/
                            _jsx(Heading, {
                                variant: 'small',
                                title: 'Two-Factor Authentication',
                                description:
                                    'Manage your two-factor authentication settings',
                            }),
                            twoFactorEnabled /*#__PURE__*/
                                ? _jsxs('div', {
                                      className:
                                          'flex flex-col items-start justify-start space-y-4',
                                      children: [
                                          /*#__PURE__*/
                                          _jsx(Badge, {
                                              variant: 'default',
                                              children: 'Enabled',
                                          }) /*#__PURE__*/,
                                          _jsx('p', {
                                              className:
                                                  'text-muted-foreground',
                                              children:
                                                  'With two-factor authentication enabled, you will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone.',
                                          }) /*#__PURE__*/,

                                          _jsx(TwoFactorRecoveryCodes, {
                                              recoveryCodesList:
                                                  recoveryCodesList,
                                              fetchRecoveryCodes:
                                                  fetchRecoveryCodes,
                                              errors: errors,
                                          }) /*#__PURE__*/,

                                          _jsx('div', {
                                              className: 'relative inline',
                                              /*#__PURE__*/
                                              children: _jsx(Form, {
                                                  ...disable.form(),
                                                  children: (
                                                      {
                                                          processing,
                                                      } /*#__PURE__*/,
                                                  ) =>
                                                      _jsxs(Button, {
                                                          variant:
                                                              'destructive',
                                                          type: 'submit',
                                                          disabled: processing,
                                                          children: [
                                                              /*#__PURE__*/

                                                              _jsx(
                                                                  ShieldBan,
                                                                  {},
                                                              ),
                                                              ' Disable 2FA',
                                                          ],
                                                      }),
                                              }),
                                          }),
                                      ],
                                  }) /*#__PURE__*/
                                : _jsxs('div', {
                                      className:
                                          'flex flex-col items-start justify-start space-y-4',
                                      children: [
                                          /*#__PURE__*/
                                          _jsx(Badge, {
                                              variant: 'destructive',
                                              children: 'Disabled',
                                          }) /*#__PURE__*/,
                                          _jsx('p', {
                                              className:
                                                  'text-muted-foreground',
                                              children:
                                                  'When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone.',
                                          }) /*#__PURE__*/,

                                          _jsx('div', {
                                              children:
                                                  hasSetupData /*#__PURE__*/
                                                      ? _jsxs(Button, {
                                                            onClick: () =>
                                                                setShowSetupModal(
                                                                    true,
                                                                ),
                                                            children: [
                                                                /*#__PURE__*/

                                                                _jsx(
                                                                    ShieldCheck,
                                                                    {},
                                                                ),
                                                                'Continue Setup',
                                                            ],
                                                        }) /*#__PURE__*/
                                                      : _jsx(Form, {
                                                            ...enable.form(),
                                                            onSuccess: () =>
                                                                setShowSetupModal(
                                                                    true,
                                                                ),
                                                            children: (
                                                                {
                                                                    processing,
                                                                } /*#__PURE__*/,
                                                            ) =>
                                                                _jsxs(Button, {
                                                                    type: 'submit',
                                                                    disabled:
                                                                        processing,
                                                                    children: [
                                                                        /*#__PURE__*/

                                                                        _jsx(
                                                                            ShieldCheck,
                                                                            {},
                                                                        ),
                                                                        'Enable 2FA',
                                                                    ],
                                                                }),
                                                        }),
                                          }),
                                      ],
                                  }) /*#__PURE__*/,

                            _jsx(TwoFactorSetupModal, {
                                isOpen: showSetupModal,
                                onClose: () => setShowSetupModal(false),
                                requiresConfirmation: requiresConfirmation,
                                twoFactorEnabled: twoFactorEnabled,
                                qrCodeSvg: qrCodeSvg,
                                manualSetupKey: manualSetupKey,
                                clearSetupData: clearSetupData,
                                fetchSetupData: fetchSetupData,
                                errors: errors,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}

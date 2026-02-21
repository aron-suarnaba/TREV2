import { AlertCircleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

export default function AlertError({ errors, title }) {
    return (
        /*#__PURE__*/
        _jsxs(Alert, {
            variant: 'destructive',
            children: [
                /*#__PURE__*/ _jsx(AlertCircleIcon, {}) /*#__PURE__*/,
                _jsx(AlertTitle, {
                    children: title || 'Something went wrong.',
                }) /*#__PURE__*/,
                _jsx(AlertDescription, {
                    /*#__PURE__*/
                    children: _jsx('ul', {
                        className: 'list-inside list-disc text-sm',
                        children: Array.from(new Set(errors)).map(
                            (error, index /*#__PURE__*/) =>
                                _jsx('li', { children: error }, index),
                        ),
                    }),
                }),
            ],
        })
    );
}

import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import { jsx as _jsx } from 'react/jsx-runtime';

export default function AuthLayout({ children, title, description, ...props }) {
    return (
        /*#__PURE__*/
        _jsx(AuthLayoutTemplate, {
            title: title,
            description: description,
            ...props,
            children: children,
        })
    );
}

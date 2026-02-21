import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { jsx as _jsx } from 'react/jsx-runtime';

export default ({ children, breadcrumbs, ...props } /*#__PURE__*/) =>
    _jsx(AppLayoutTemplate, {
        breadcrumbs: breadcrumbs,
        ...props,
        children: children,
    });

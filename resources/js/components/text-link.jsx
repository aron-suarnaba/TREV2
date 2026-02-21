import { Link } from '@inertiajs/react';

import { cn } from '@/lib/utils';
import { jsx as _jsx } from 'react/jsx-runtime';

export default function TextLink({ className = '', children, ...props }) {
    return (
        /*#__PURE__*/
        _jsx(Link, {
            className: cn(
                'text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500',
                className,
            ),
            ...props,
            children: children,
        })
    );
}

import { Link } from '@inertiajs/react';
import { Fragment } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime';

export function Breadcrumbs({ breadcrumbs }) {
    return (
        /*#__PURE__*/
        _jsx(_Fragment, {
            children:
                breadcrumbs.length > 0 /*#__PURE__*/ &&
                _jsx(Breadcrumb, {
                    /*#__PURE__*/
                    children: _jsx(BreadcrumbList, {
                        children: breadcrumbs.map((item, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                /*#__PURE__*/
                                _jsxs(
                                    Fragment,
                                    {
                                        children: [
                                            /*#__PURE__*/
                                            _jsx(BreadcrumbItem, {
                                                children: isLast /*#__PURE__*/
                                                    ? _jsx(BreadcrumbPage, {
                                                          children: item.title,
                                                      }) /*#__PURE__*/
                                                    : _jsx(BreadcrumbLink, {
                                                          asChild: true,
                                                          /*#__PURE__*/
                                                          children: _jsx(Link, {
                                                              href: item.href,
                                                              children:
                                                                  item.title,
                                                          }),
                                                      }),
                                            }),
                                            !isLast &&
                                                /*#__PURE__*/ _jsx(
                                                    BreadcrumbSeparator,
                                                    {},
                                                ),
                                        ],
                                    },
                                    index,
                                )
                            );
                        }),
                    }),
                }),
        })
    );
}

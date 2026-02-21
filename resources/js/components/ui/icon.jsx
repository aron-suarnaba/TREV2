import { jsx as _jsx } from "react/jsx-runtime";






export function Icon({ iconNode: IconComponent, className }) {
  if (!IconComponent) {
    return null;
  }

  return /*#__PURE__*/_jsx(IconComponent, { className: className });
}
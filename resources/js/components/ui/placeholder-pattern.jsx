import { useId } from 'react';import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";





export function PlaceholderPattern({ className }) {
  const patternId = useId();

  return (/*#__PURE__*/
    _jsxs("svg", { className: className, fill: "none", children: [/*#__PURE__*/
      _jsx("defs", { children: /*#__PURE__*/
        _jsx("pattern", { id: patternId, x: "0", y: "0", width: "10", height: "10", patternUnits: "userSpaceOnUse", children: /*#__PURE__*/
          _jsx("path", { d: "M-3 13 15-5M-5 5l18-18M-1 21 17 3" }) }
        ) }
      ), /*#__PURE__*/
      _jsx("rect", { stroke: "none", fill: `url(#${patternId})`, width: "100%", height: "100%" })] }
    ));

}
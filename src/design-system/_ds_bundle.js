/* @ds-bundle: {"format":3,"namespace":"JobzoDesignSystem_0e98b2","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"3a0d37ef59cd","components/core/IconButton.jsx":"b6dd23557a10","components/feedback/Avatar.jsx":"e462c2390dc9","components/feedback/Badge.jsx":"1465a9db2740","components/feedback/Card.jsx":"0e8381af3fa5","components/forms/Input.jsx":"a7d2e95b36f5","components/forms/Select.jsx":"434dbc739bbb","components/forms/Switch.jsx":"7f563079306e","ui_kits/jobzo-app/app-data.js":"d6633f11d421","ui_kits/jobzo-app/screens.jsx":"c07f6ef591c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JobzoDesignSystem_0e98b2 = window.JobzoDesignSystem_0e98b2 || {});

const __ds_scope = {};

// Make React available - will be set when bundle is used
Object.defineProperty(__ds_scope, 'React', {
  get: () => window.React,
  configurable: true
});

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Jobzo Button — primary action control. Large, friendly, mobile-first.
 * Variants: primary | secondary | ghost | danger
 * Sizes: sm | md | lg  (md/lg meet the 44px touch-target minimum)
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 14px",
      font: "var(--text-sm)",
      gap: 6,
      radius: "var(--radius-sm)"
    },
    md: {
      height: 44,
      padding: "0 18px",
      font: "var(--text-sm)",
      gap: 8,
      radius: "var(--radius-md)"
    },
    lg: {
      height: 52,
      padding: "0 24px",
      font: "var(--text-base)",
      gap: 10,
      radius: "var(--radius-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-primary)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    danger: {
      background: "var(--color-danger)",
      color: "var(--text-on-color)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      minWidth: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
      letterSpacing: "var(--tracking-snug)",
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = variant === "ghost" ? "none" : "brightness(0.94)";
      if (!disabled && variant === "ghost") e.currentTarget.style.background = "var(--color-primary-soft)";
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control with a 44px touch target.
 * Use for app-bar actions, list-row affordances, toolbars.
 * Variants: solid | soft | ghost   Sizes: sm | md | lg
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      boxShadow: "var(--shadow-primary)"
    },
    soft: {
      background: "var(--color-primary-soft)",
      color: "var(--color-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — customer / technician identity. Shows an image, or initials on a
 * deterministic tinted background derived from the name.
 * size: sm | md | lg | xl
 */
function Avatar({
  name = "",
  src = null,
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 28,
    md: 40,
    lg: 48,
    xl: 64
  };
  const dim = sizes[size] || sizes.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const tints = [["var(--blue-100)", "var(--blue-700)"], ["var(--green-100)", "var(--green-700)"], ["var(--amber-100)", "var(--amber-700)"], ["var(--red-100)", "var(--red-700)"], ["var(--gray-200)", "var(--gray-700)"]];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  const [bg, fg] = tints[h % tints.length];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: dim,
      height: dim,
      borderRadius: "var(--radius-pill)",
      background: src ? "var(--surface-sunken)" : bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `var(--weight-semibold) ${dim * 0.38}px/1 var(--font-sans)`,
      overflow: "hidden",
      flex: "0 0 auto",
      userSelect: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — Jobzo's signature status pill. Used everywhere to convey job state.
 * status: done | progress | scheduled | cancelled | neutral
 * tone:   soft (default, tinted) | solid (filled)
 * Optionally renders a leading dot.
 */
function Badge({
  children,
  status = "neutral",
  tone = "soft",
  dot = false,
  size = "md",
  style = {},
  ...rest
}) {
  const map = {
    done: {
      fg: "var(--status-done-fg)",
      bg: "var(--status-done-bg)",
      solid: "var(--status-done-solid)",
      border: "var(--status-done-border)"
    },
    progress: {
      fg: "var(--status-progress-fg)",
      bg: "var(--status-progress-bg)",
      solid: "var(--status-progress-solid)",
      border: "var(--status-progress-border)"
    },
    scheduled: {
      fg: "var(--status-scheduled-fg)",
      bg: "var(--status-scheduled-bg)",
      solid: "var(--status-scheduled-solid)",
      border: "var(--status-scheduled-border)"
    },
    cancelled: {
      fg: "var(--status-cancelled-fg)",
      bg: "var(--status-cancelled-bg)",
      solid: "var(--status-cancelled-solid)",
      border: "var(--status-cancelled-border)"
    },
    neutral: {
      fg: "var(--status-neutral-fg)",
      bg: "var(--status-neutral-bg)",
      solid: "var(--status-neutral-solid)",
      border: "var(--status-neutral-border)"
    }
  };
  const c = map[status] || map.neutral;
  const sizes = {
    sm: {
      font: "var(--text-2xs)",
      padding: "2px 8px",
      dot: 6
    },
    md: {
      font: "var(--text-xs)",
      padding: "3px 10px",
      dot: 7
    }
  };
  const s = sizes[size] || sizes.md;
  const solid = tone === "solid";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: `var(--weight-semibold) ${s.font}/1.4 var(--font-sans)`,
      letterSpacing: "var(--tracking-wide)",
      color: solid ? "var(--text-on-color)" : c.fg,
      background: solid ? c.solid : c.bg,
      border: `1px solid ${solid ? "transparent" : c.border}`,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: "50%",
      background: solid ? "var(--text-on-color)" : c.solid,
      flex: "0 0 auto"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — white surface container with soft elevation. The base unit of
 * every Jobzo list & detail view (job cards, customer cards, summary tiles).
 * padding: none | sm | md | lg     interactive adds press feedback.
 */
function Card({
  children,
  padding = "md",
  interactive = false,
  elevated = true,
  onClick,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-3)",
    md: "var(--space-4)",
    lg: "var(--space-5)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: elevated ? "var(--shadow-sm)" : "none",
      padding: pads[padding] ?? pads.md,
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...style
    },
    onMouseEnter: e => {
      if (interactive) e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = elevated ? "var(--shadow-sm)" : "none";
        e.currentTarget.style.transform = "scale(1)";
      }
    },
    onMouseDown: e => {
      if (interactive) e.currentTarget.style.transform = "scale(0.99)";
    },
    onMouseUp: e => {
      if (interactive) e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labeled text field with optional leading icon, helper & error text.
 * Mobile-first: 48px tall, 16px text (prevents iOS zoom).
 */
function Input({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  leadingIcon = null,
  helper = "",
  error = "",
  disabled = false,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const React = window.React;
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const invalid = Boolean(error);
  const borderColor = invalid ? "var(--color-danger)" : focused ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--font-label)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 14px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !invalid ? "var(--ring-focus)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "flex"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--font-body)",
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-caption)",
      color: invalid ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown styled to match Input. Reliable on mobile.
 * options: array of { value, label } or strings.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  helper = "",
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      font: "var(--font-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 48,
      padding: "0 40px 0 14px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      font: "var(--font-body)",
      color: value ? "var(--text-strong)" : "var(--text-muted)",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle with a 44px touch target. Use for settings and
 * quick filters. Optional inline label.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const track = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    "aria-disabled": disabled,
    onClick: toggle,
    style: {
      position: "relative",
      width: 48,
      height: 28,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-primary)" : "var(--gray-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-base) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--gray-0)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-out)"
    }
  }));
  if (!label) return track;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      minHeight: 44,
      ...style
    }
  }, track, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body)",
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jobzo-app/app-data.js
try { (() => {
// Jobzo mobile app — mock data for the UI kit
window.JOBZO_DATA = {
  business: {
    name: "Cool Breeze AC Services",
    owner: "Suresh Patel",
    city: "Mumbai"
  },
  stats: {
    today: 6,
    pending: 3,
    earnedToday: 4200,
    earnedWeek: 28600
  },
  jobs: [{
    id: "JOB-1042",
    customer: "Ramesh Kumar",
    service: "AC not cooling",
    category: "AC Repair",
    address: "B-204, Sunshine Apartments, Andheri West",
    time: "10:30 AM",
    date: "Today",
    status: "progress",
    amount: 650,
    phone: "98765 43210",
    tech: "Anil"
  }, {
    id: "JOB-1041",
    customer: "Priya Sharma",
    service: "Quarterly pest control",
    category: "Pest Control",
    address: "Flat 7C, Green Meadows, Powai",
    time: "12:00 PM",
    date: "Today",
    status: "scheduled",
    amount: 1200,
    phone: "99201 88776",
    tech: "Vijay"
  }, {
    id: "JOB-1040",
    customer: "Mehta Stores",
    service: "Kitchen tap leakage",
    category: "Plumbing",
    address: "Shop 3, Linking Road, Bandra",
    time: "2:30 PM",
    date: "Today",
    status: "scheduled",
    amount: 450,
    phone: "98330 11223",
    tech: "Anil"
  }, {
    id: "JOB-1039",
    customer: "Fatima Sheikh",
    service: "Geyser installation",
    category: "Electrical",
    address: "12, Hill Road, Bandra West",
    time: "9:00 AM",
    date: "Today",
    status: "done",
    amount: 1800,
    phone: "97694 55667",
    tech: "Vijay"
  }, {
    id: "JOB-1038",
    customer: "Arjun Nair",
    service: "AC servicing (2 units)",
    category: "AC Repair",
    address: "501, Sea View, Worli",
    time: "4:00 PM",
    date: "Today",
    status: "cancelled",
    amount: 900,
    phone: "90041 23456",
    tech: "Anil"
  }, {
    id: "JOB-1037",
    customer: "Deepa Iyer",
    service: "Cockroach treatment",
    category: "Pest Control",
    address: "A-9, Lake Town, Chembur",
    time: "11:00 AM",
    date: "Tomorrow",
    status: "scheduled",
    amount: 800,
    phone: "98191 33445",
    tech: "Vijay"
  }],
  categories: ["AC Repair", "Pest Control", "Plumbing", "Electrical"],
  technicians: ["Anil", "Vijay", "Suresh (me)"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jobzo-app/app-data.js", error: String((e && e.message) || e) }); }

// ui_kits/jobzo-app/screens.jsx
try { (() => {
// Jobzo mobile app — UI kit screens. Composes DS components from window.JobzoDesignSystem_0e98b2.
const DS = window.JobzoDesignSystem_0e98b2;
const {
  Button,
  IconButton,
  Badge,
  Card,
  Avatar,
  Input,
  Select,
  Switch
} = DS;
const STATUS_TEXT = {
  done: "Done",
  progress: "In Progress",
  scheduled: "Scheduled",
  cancelled: "Cancelled",
  neutral: "Draft"
};
const CAT_ICON = {
  "AC Repair": "air-vent",
  "Pest Control": "bug",
  "Plumbing": "wrench",
  "Electrical": "zap"
};
function Icon({
  n,
  size = 20,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
function rupee(n) {
  return "\u20B9" + n.toLocaleString("en-IN");
}

/* ---------- App chrome ---------- */
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      font: "var(--weight-semibold) 14px/1 var(--font-sans)",
      color: "var(--text-strong)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "signal",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "wifi",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "battery-full",
    size: 18
  })));
}
function AppBar({
  title,
  subtitle,
  left,
  right,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: accent ? "var(--color-primary)" : "var(--surface-card)",
      borderBottom: accent ? "none" : "1px solid var(--border-subtle)",
      padding: "10px 14px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      minHeight: 56
    }
  }, left, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) 18px/1.2 var(--font-sans)",
      color: accent ? "#fff" : "var(--text-strong)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: accent ? "rgba(255,255,255,.8)" : "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle)), right);
}
function BottomNav({
  tab,
  onTab
}) {
  const items = [{
    id: "today",
    icon: "layout-dashboard",
    label: "Today"
  }, {
    id: "jobs",
    icon: "clipboard-list",
    label: "Jobs"
  }, {
    id: "customers",
    icon: "users",
    label: "Customers"
  }, {
    id: "more",
    icon: "menu",
    label: "More"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      paddingBottom: 8
    }
  }, items.map(it => {
    const active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onTab(it.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "10px 0 6px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: active ? "var(--color-primary)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: it.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${active ? "var(--weight-semibold)" : "var(--weight-medium)"} 11px/1 var(--font-sans)`
      }
    }, it.label));
  }));
}

/* ---------- Shared pieces ---------- */
function StatTile({
  icon,
  label,
  value,
  tint,
  fg
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: icon,
    size: 18,
    color: fg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-extra) 22px/1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, label));
}
function JobRow({
  job,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "md",
    onClick: () => onOpen(job),
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      background: "var(--color-primary-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: CAT_ICON[job.category],
    size: 20,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label)",
      color: "var(--text-strong)"
    }
  }, job.service), /*#__PURE__*/React.createElement(Badge, {
    status: job.status,
    dot: true
  }, STATUS_TEXT[job.status])), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      marginTop: 4,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "user",
    size: 13
  }), job.customer, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-default)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    size: 13
  }), job.time), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      marginTop: 4,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, job.address)))));
}

/* ---------- Screens ---------- */
function TodayScreen({
  data,
  onOpen
}) {
  const today = data.jobs.filter(j => j.date === "Today");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    accent: true,
    title: "Hi, " + data.business.owner.split(" ")[0],
    subtitle: data.business.name,
    left: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/jobzo-icon-light.svg",
      width: "36",
      height: "36",
      style: {
        borderRadius: 9
      }
    }),
    right: /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications",
      variant: "ghost",
      style: {
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "bell",
      size: 22
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 14px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "indian-rupee",
    label: "Earned today",
    value: rupee(data.stats.earnedToday),
    tint: "var(--green-50)",
    fg: "var(--green-600)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "clock",
    label: "Pending jobs",
    value: data.stats.pending,
    tint: "var(--amber-50)",
    fg: "var(--amber-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-heading)",
      color: "var(--text-strong)"
    }
  }, "Today's jobs"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-link)"
    }
  }, today.length, " jobs")), today.map(j => /*#__PURE__*/React.createElement(JobRow, {
    key: j.id,
    job: j,
    onOpen: onOpen
  }))));
}
function JobsScreen({
  data,
  onOpen,
  filter,
  onFilter
}) {
  const filters = ["all", "scheduled", "progress", "done"];
  const list = filter === "all" ? data.jobs : data.jobs.filter(j => j.status === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Jobs",
    subtitle: data.jobs.length + " total",
    right: /*#__PURE__*/React.createElement(IconButton, {
      label: "Search",
      variant: "soft"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "search",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 14px",
      overflowX: "auto",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, filters.map(f => {
    const active = filter === f;
    return /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => onFilter(f),
      style: {
        flex: "0 0 auto",
        padding: "7px 14px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid " + (active ? "var(--color-primary)" : "var(--border-default)"),
        background: active ? "var(--color-primary)" : "var(--surface-card)",
        color: active ? "#fff" : "var(--text-body)",
        cursor: "pointer",
        font: "var(--weight-semibold) 13px/1 var(--font-sans)",
        textTransform: "capitalize"
      }
    }, f === "progress" ? "In Progress" : f);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "14px 14px 24px"
    }
  }, list.map(j => /*#__PURE__*/React.createElement(JobRow, {
    key: j.id,
    job: j,
    onOpen: onOpen
  }))));
}
function JobDetailScreen({
  job,
  onBack,
  onComplete
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: job.id,
    subtitle: job.category,
    left: /*#__PURE__*/React.createElement(IconButton, {
      label: "Back",
      variant: "ghost",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left",
      size: 22
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 14px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) 20px/1.2 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, job.service), /*#__PURE__*/React.createElement(Badge, {
    status: job.status,
    dot: true
  }, STATUS_TEXT[job.status])), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: job.customer,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label)",
      color: "var(--text-strong)"
    }
  }, job.customer), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, job.phone))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    fullWidth: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "phone",
      size: 16
    })
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    fullWidth: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "message-circle",
      size: 16
    }),
    style: {
      color: "var(--green-600)",
      borderColor: "var(--green-200)"
    }
  }, "WhatsApp"))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      marginBottom: 12
    }
  }, [["map-pin", "Address", job.address], ["calendar", "Schedule", job.date + " · " + job.time], ["user-cog", "Technician", job.tech], ["indian-rupee", "Estimate", rupee(job.amount)]].map(([ic, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      padding: "9px 0",
      borderBottom: k !== "Estimate" ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    size: 18,
    color: "var(--text-muted)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body-sm)",
      color: "var(--text-strong)",
      marginTop: 1
    }
  }, v)))))), job.status !== "done" && job.status !== "cancelled" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sheet)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "check-circle",
      size: 18
    }),
    onClick: onComplete
  }, "Mark as Done")));
}
function NewJobScreen({
  data,
  onBack
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "New Job",
    left: /*#__PURE__*/React.createElement(IconButton, {
      label: "Back",
      variant: "ghost",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "x",
      size: 22
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 14px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Customer name",
    placeholder: "e.g. Ramesh Kumar",
    required: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "user",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone number",
    type: "tel",
    placeholder: "98765 43210",
    required: true,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "phone",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service type",
    placeholder: "Choose service",
    options: data.categories
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Address",
    placeholder: "Flat, building, area",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "map-pin",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    type: "date",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Time",
    type: "time",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Assign technician",
    placeholder: "Select technician",
    options: data.technicians
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    elevated: false,
    style: {
      background: "var(--surface-sunken)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Send booking confirmation on WhatsApp",
    checked: true,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sheet)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onBack
  }, "Create Job")));
}
function CustomersScreen({
  data
}) {
  const seen = {};
  const customers = data.jobs.filter(j => {
    if (seen[j.customer]) return false;
    seen[j.customer] = 1;
    return true;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Customers",
    subtitle: customers.length + " people",
    right: /*#__PURE__*/React.createElement(IconButton, {
      label: "Add",
      variant: "soft"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "user-plus",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "14px 14px 24px"
    }
  }, customers.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.customer,
    interactive: true,
    padding: "md",
    style: {
      marginBottom: 10,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.customer,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label)",
      color: "var(--text-strong)"
    }
  }, c.customer), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, c.phone)), /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, c.category), /*#__PURE__*/React.createElement(Icon, {
    n: "chevron-right",
    size: 18,
    color: "var(--text-disabled)"
  })))));
}
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "0 24px",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/jobzo-icon.svg",
    width: "72",
    height: "72",
    style: {
      borderRadius: 18,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-extra) 30px/1.1 var(--font-sans)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Jobzo"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Run your service business from your phone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    type: "tel",
    placeholder: "98765 43210",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "phone",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onLogin,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      size: 18
    })
  }, "Get OTP"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "By continuing you agree to our Terms & Privacy Policy")));
}
Object.assign(window, {
  JobzoScreens: {
    TodayScreen,
    JobsScreen,
    JobDetailScreen,
    NewJobScreen,
    CustomersScreen,
    LoginScreen,
    BottomNav,
    StatusBar,
    Icon
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jobzo-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();

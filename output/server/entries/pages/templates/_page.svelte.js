import { c as compute_rest_props, a as compute_slots, i as is_promise, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, g as getContext, b as spread, d as escape_object, f as escape_attribute_value, s as setContext, a as add_attribute, h as get_current_component, v as validate_component, i as each, e as escape, j as createEventDispatcher$1 } from "../../../chunks/ssr.js";
import { s as searchTemplates } from "../../../chunks/api.js";
import { t as templateTypes } from "../../../chunks/store.js";
/* empty css                                                     */import { i as is_void, W as Wrapper, L as Label, B as Button } from "../../../chunks/Label.js";
import { twMerge, twJoin } from "tailwind-merge";
import * as dom from "@floating-ui/dom";
import { w as writable } from "../../../chunks/index.js";
const ChevronDownSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chevron down solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 10 6" }
    ],
    {}
  )}><path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path></svg> `;
});
const FilterSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "filter solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 18" }
    ],
    {}
  )}><path fill="currentColor" d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.992 1.992 0 0 0 .18-2.09Z"></path></svg> `;
});
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop2 = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop2 } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) },
        { role: escape_attribute_value(role) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  let middleware;
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  placement && (referenceEl = referenceEl);
  {
    dispatch("show", referenceEl, open);
  }
  middleware = [
    dom.flip(),
    dom.shift(),
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l ");
  return `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${open && referenceEl ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
    }
  })}` : ``} `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl);
    }
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const colorClasses = {
  primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
  secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => twMerge(inline ? "inline-flex" : "flex", "items-center", extraClass);
let spacing = "mr-2";
const inputClass = (custom, color, rounded, tinted, extraClass) => twMerge(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  spacing,
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  rounded && "rounded",
  colorClasses[color],
  extraClass
);
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "custom", "inline", "group", "value", "checked", "spacing"]);
  let $$slots = compute_slots(slots);
  let { color = "primary" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "on" } = $$props;
  let { checked = void 0 } = $$props;
  let { spacing: spacing2 = "mr-2" } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing2 !== void 0)
    $$bindings.spacing(spacing2);
  return `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: $$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(twMerge(spacing2, inputClass(custom, color, true, background, $$slots.default || $$props.class)))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}> ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )} `;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  return `<div class="inline-block min-w-full overflow-hidden rounded-lg shadow"><table class="min-w-full leading-normal"><thead><tr>${each(header, (name) => {
    return `<th scope="col" class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200">${escape(name)} </th>`;
  })}</tr></thead> <tbody>${slots.default ? slots.default({}) : ``}</tbody></table></div>`;
});
const TablePaging = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meta } = $$props;
  const currentPage = meta.currentPage + 1;
  createEventDispatcher$1();
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  return `<div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between"><div class="flex items-center"><button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100" data-svelte-h="svelte-pg4j1j"><svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path></svg></button> ${each({ length: meta.totalPages }, (_, page) => {
    return `<button type="button"${add_attribute(
      "class",
      `w-full px-4 py-2 text-base ${currentPage === page + 1 ? "text-indigo-500" : "text-gray-600"} bg-white border hover:bg-gray-100`,
      0
    )}>${escape(page + 1)} </button>`;
  })} <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100" data-svelte-h="svelte-zcq9yd"><svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path></svg></button></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let criteria = data.criteria;
  let page = 0;
  const tableHeader = ["Name", "Code", "Type", "Created At", "Partial", ""];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container px-4 mx-auto sm:px-8"><div class="py-8"><div class="flex flex-row justify-between w-full mb-1 sm:mb-0"><h2 class="text-2xl leading-tight" data-svelte-h="svelte-fohdtx">Templates</h2> <div class="text-end"><form class="flex flex-col justify-center space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">     ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
    default: () => {
      return `${validate_component(FilterSolid, "FilterSolid").$$render($$result, { class: "w-3 h-3" }, {}, {})}`;
    }
  })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-48 p-3 space-y-2 text-sm" }, {}, {
    default: () => {
      return `${each(Object.entries(criteria), ([key, value]) => {
        return `${typeof value == "boolean" ? `<li>${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: value }, {}, {
          default: () => {
            return `${escape(key)}`;
          }
        })} </li>` : ``}`;
      })}`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
    default: () => {
      return `Types
                        ${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "w-3 h-3 ml-2 " }, {}, {})}`;
    }
  })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-44 divide-y divide-gray-100" }, {}, {
    default: () => {
      return `${each(templateTypes, (type) => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(type)}`;
          }
        })}`;
      })}`;
    }
  })} <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit" data-svelte-h="svelte-vitivk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></button></form></div></div> <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0" data-svelte-h="svelte-1hffhxg"></div> <div class="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8">${each(Object.entries(criteria), ([key, value]) => {
    return `<span class="px-4 py-2 mx-2 text-base text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 ">${escape(key)}: ${escape(value)} </span>`;
  })}</div> <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <tr data-svelte-h="svelte-18jurag"><td colspan="6" class="px-5 py-5 text-sm bg-white border-b border-gray-200"><div class="flex items-center"><div class="ml-3"><p class="text-gray-900 whitespace-no-wrap">Loading...</p></div></div></td></tr> `;
    }
    return function(templates) {
      return ` ${validate_component(Table, "Table").$$render($$result, { header: tableHeader }, {}, {
        default: () => {
          return `${each(templates.content, (template) => {
            return `<tr><td class="px-5 py-5 text-sm bg-white border-b border-gray-200"><p class="text-gray-900 whitespace-no-wrap">${escape(template.name)} </p></td> <td class="px-5 py-5 text-sm bg-white border-b border-gray-200"><p class="text-gray-900 whitespace-no-wrap">${escape(template.code)} </p></td> <td class="px-5 py-5 text-sm bg-white border-b border-gray-200"><p class="text-gray-900 whitespace-no-wrap">${escape(template.extFilename)} </p></td> <td class="px-5 py-5 text-sm bg-white border-b border-gray-200"><p class="text-gray-900 whitespace-no-wrap">${escape(template.createdAt)} </p></td> <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">${template.partial ? `<span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900" data-svelte-h="svelte-o33k08"><span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50"></span> </span>` : `<span class="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900" data-svelte-h="svelte-1ci4ss8"><span aria-hidden="true" class="absolute inset-0 bg-red-200 rounded-full opacity-50"></span> </span>`}</td> <td class="px-5 py-5 text-sm bg-white border-b border-gray-200"><a${add_attribute("href", `/templates/${template.id}`, 0)} class="text-indigo-600 hover:text-indigo-900">Edit
                                </a></td> </tr>`;
          })}`;
        }
      })} ${validate_component(TablePaging, "TablePaging").$$render($$result, { meta: templates.page }, {}, {})} `;
    }(__value);
  }(searchTemplates(criteria, page))}</div></div></div>`;
});
export {
  Page as default
};

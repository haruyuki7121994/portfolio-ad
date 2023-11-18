import { c as compute_rest_props, a as compute_slots, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, b as spread, f as escape_attribute_value, d as escape_object, g as getContext, v as validate_component, e as escape, j as createEventDispatcher, o as onDestroy, i as each } from "../../../../chunks/ssr.js";
import { h as hiddenDrawer, b as hiddenLinkTosDrawer, c as hiddenViewJsonDrawer, e as hiddenTableContent } from "../../../../chunks/store.js";
/* empty css                                                        */import { W as Wrapper, B as Button, L as Label } from "../../../../chunks/Label.js";
import { twMerge } from "tailwind-merge";
import { N as NotificationComponent } from "../../../../chunks/NotificationComponent.js";
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  let { activateClickOutside = true } = $$props;
  let { hidden = true } = $$props;
  let { position = "fixed" } = $$props;
  let { leftOffset = "inset-y-0 left-0" } = $$props;
  let { rightOffset = "inset-y-0 right-0" } = $$props;
  let { topOffset = "inset-x-0 top-0" } = $$props;
  let { bottomOffset = "inset-x-0 bottom-0" } = $$props;
  let { width = "w-80" } = $$props;
  let { backdrop = true } = $$props;
  let { bgColor = "bg-gray-900" } = $$props;
  let { bgOpacity = "bg-opacity-75" } = $$props;
  let { placement = "left" } = $$props;
  let { id = "drawer-example" } = $$props;
  let { divClass = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 left-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if ($$props.activateClickOutside === void 0 && $$bindings.activateClickOutside && activateClickOutside !== void 0)
    $$bindings.activateClickOutside(activateClickOutside);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.rightOffset === void 0 && $$bindings.rightOffset && rightOffset !== void 0)
    $$bindings.rightOffset(rightOffset);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.bottomOffset === void 0 && $$bindings.bottomOffset && bottomOffset !== void 0)
    $$bindings.bottomOffset(bottomOffset);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `${!hidden ? `${backdrop && activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : `${backdrop && !activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : ``}`} <div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>` : ``} `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass", "innerWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0)
    $$bindings.innerWrappedClass(innerWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "rounded-b-lg" : "", $$slots.header ? "rounded-t-lg" : "");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-13ohx5{max-height:400px}li.svelte-13ohx5{margin-top:16px;font-weight:400;display:list-item;color:hsl(0 0% 98%)}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { canEdit } = $$props;
  let { useEditor } = $$props;
  createEventDispatcher();
  if ($$props.canEdit === void 0 && $$bindings.canEdit && canEdit !== void 0)
    $$bindings.canEdit(canEdit);
  if ($$props.useEditor === void 0 && $$bindings.useEditor && useEditor !== void 0)
    $$bindings.useEditor(useEditor);
  $$result.css.add(css$1);
  return `<ul class="svelte-13ohx5"><li class="svelte-13ohx5" data-svelte-h="svelte-1huopth"><a href="/">Home</a></li> <li class="svelte-13ohx5" data-svelte-h="svelte-sb6hw"><a href="/templates">Templates</a></li> <li class="svelte-13ohx5"><a href="#" data-svelte-h="svelte-1cxln9f">Reload</a></li> ${canEdit ? `${useEditor ? `<li class="svelte-13ohx5"><a href="#" data-svelte-h="svelte-1802ziw">Edit Template</a></li>` : `<li class="svelte-13ohx5"><a href="#" data-svelte-h="svelte-12vgwzb">Edit Template</a></li> <li class="svelte-13ohx5"><a href="#" data-svelte-h="svelte-12ajvmk">Edit Link</a></li>`} <li class="svelte-13ohx5"><a href="#" data-svelte-h="svelte-np04ow">View Json</a></li>` : ``}</ul>`;
});
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey = "no-api-key" } = $$props;
  let { channel = "6" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0)
    $$bindings.apiKey(apiKey);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${add_attribute("class", cssClass, 0)}${add_attribute("this", container, 0)}>${inline ? `<div${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}></div>` : `<textarea${add_attribute("id", id, 0)} style="visibility:hidden"${add_attribute("this", element, 0)}></textarea>`}</div>`;
});
const EditContentPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenDrawer, $$unsubscribe_hiddenDrawer;
  $$unsubscribe_hiddenDrawer = subscribe(hiddenDrawer, (value) => $hiddenDrawer = value);
  let { template } = $$props;
  createEventDispatcher();
  let params = template.parameters;
  let htmlContent = "";
  if (params.content) {
    htmlContent = params.content.value;
  }
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let conf = { menubar: false, height: "300px" };
  const paramEntriesSorted = Object.keys(params).sort((a, b) => {
    return params[a].id - params[b].id;
  });
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  $$unsubscribe_hiddenDrawer();
  return `${validate_component(NotificationComponent, "Notification").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
    $$result,
    {
      class: "w-[700px]",
      transitionType: "fly",
      transitionParams,
      hidden: $hiddenDrawer === true,
      activateClickOutside: false,
      id: "sidebar4"
    },
    {},
    {
      default: () => {
        return `<form action="#" class="mb-6"><div class="flex items-center" data-svelte-h="svelte-pdbnhe"><h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Template</h5></div> ${each(paramEntriesSorted, (key) => {
          return `${params[key].type === "textarea" ? `<div class="col-span-2"><div class="py-3 relative"><!-- HTML_TAG_START -->${`<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`}<!-- HTML_TAG_END --> ${validate_component(Editor, "Editor").$$render(
            $$result,
            {
              conf,
              apiKey: "gogaa28ubjnm57h7vfteo9pod8j45tjfsdolci468lpp2m7v",
              value: params[key].value
            },
            {},
            {}
          )} <input type="text" hidden${add_attribute("name", params[key].key, 0)}${add_attribute("value", htmlContent, 0)}></div> </div>` : `${params[key].type === "image_url" ? `<div class="col-span-2"><div class="py-3 relative"><!-- HTML_TAG_START -->${`<Label class="block mb-2">Preview</Label>`}<!-- HTML_TAG_END --> <a href="javascript:void(0);" class="relative block"><img alt="profile"${add_attribute("src", params[key].value, 0)}${add_attribute("id", `preview${params[key].key}`, 0)} class="params[key]-cover rounded-lg h-40 w-40 "></a> </div></div> <div class="col-span-2"><div class="py-3 relative"><!-- HTML_TAG_START -->${`<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`}<!-- HTML_TAG_END --> <input class="rounded-lg border-transparent flex-1 appearance-none border-2 border-solid border-[#eee] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"${add_attribute("placeholder", params[key].name, 0)}${add_attribute("value", params[key].value, 0)}${add_attribute("name", params[key].key, 0)} type="text"${add_attribute("id", params[key].key, 0)}></div> </div>` : `<div class="col-span-2"><div class="py-3 relative"><!-- HTML_TAG_START -->${`<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`}<!-- HTML_TAG_END --> <input class="rounded-lg border-transparent flex-1 appearance-none border-2 border-solid border-[#eee] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"${add_attribute("placeholder", params[key].name, 0)}${add_attribute("value", params[key].value, 0)}${add_attribute("name", params[key].key, 0)}${add_attribute("type", params[key].type, 0)}${add_attribute("id", params[key].key, 0)}></div> </div>`}`}`;
        })} <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Update`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { class: "w-full", color: "light" }, {}, {
          default: () => {
            return `<svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Cancel`;
          }
        })}</div></form>`;
      }
    }
  )}`;
});
const EditLinkTosPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenLinkTosDrawer, $$unsubscribe_hiddenLinkTosDrawer;
  $$unsubscribe_hiddenLinkTosDrawer = subscribe(hiddenLinkTosDrawer, (value) => $hiddenLinkTosDrawer = value);
  let { template } = $$props;
  createEventDispatcher();
  const params = template.linkTos;
  let fullPageTemplates = [];
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  $$unsubscribe_hiddenLinkTosDrawer();
  return `${validate_component(NotificationComponent, "Notification").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
    $$result,
    {
      class: "w-[700px]",
      transitionType: "fly",
      transitionParams,
      hidden: $hiddenLinkTosDrawer === true,
      activateClickOutside: false,
      id: "sidebar4"
    },
    {},
    {
      default: () => {
        return `<form action="#" class="mb-6"><div class="flex items-center" data-svelte-h="svelte-1f5qh6e"><h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Link Tos</h5></div> ${each(Object.entries(params), ([key, value]) => {
          return `<div class="col-span-2"><div class="py-3 relative"><!-- HTML_TAG_START -->${`<Label for="form-${key}" class="block mb-2">${key}</Label>`}<!-- HTML_TAG_END --> <select${add_attribute("id", key, 0)}${add_attribute("name", key, 0)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">${each(fullPageTemplates, (template2) => {
            return `<option ${template2.code === value ? "selected" : ""}${add_attribute("value", template2.code, 0)}>${escape(template2.name)}</option>`;
          })}</select></div> </div>`;
        })} <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Update`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { class: "w-full", color: "light" }, {}, {
          default: () => {
            return `<svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Cancel`;
          }
        })}</div></form>`;
      }
    }
  )}`;
});
const ViewPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenViewJsonDrawer, $$unsubscribe_hiddenViewJsonDrawer;
  $$unsubscribe_hiddenViewJsonDrawer = subscribe(hiddenViewJsonDrawer, (value) => $hiddenViewJsonDrawer = value);
  let { template } = $$props;
  createEventDispatcher();
  let htmlContent = template.htmlContent;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  $$unsubscribe_hiddenViewJsonDrawer();
  return `${validate_component(NotificationComponent, "Notification").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
    $$result,
    {
      class: "w-[700px]",
      transitionType: "fly",
      transitionParams,
      hidden: $hiddenViewJsonDrawer === true,
      activateClickOutside: false,
      id: "sidebar4"
    },
    {},
    {
      default: () => {
        return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div class="sm:col-span-2">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "mb-2" }, {}, {
          default: () => {
            return `Description`;
          }
        })} ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            id: "description",
            value: htmlContent,
            placeholder: "Your description here",
            rows: "30",
            name: "description",
            required: true
          },
          {},
          {}
        )}</div></div> <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Update`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { class: "w-full", color: "light" }, {}, {
          default: () => {
            return `<svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Cancel`;
          }
        })}</div></form> `;
      }
    }
  )}`;
});
const atomOneDarkReasonable = "";
const EditorPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { htmlContent } = $$props;
  createEventDispatcher();
  let toolbar = [
    "undo redo",
    "styles",
    "bold italic",
    "forecolor backcolor",
    "alignleft aligncenter alignright alignjustify",
    "bullist numlist outdent indent",
    "fontsize fontsizeinput fontfamily",
    "link image media"
  ];
  let conf = {
    menubar: true,
    min_height: 700,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "wordcount"
    ],
    toolbar: toolbar.join(" | "),
    content_style: "body { margin: 1rem auto; max-width: 800px; } p {margin: 0}"
  };
  if ($$props.htmlContent === void 0 && $$bindings.htmlContent && htmlContent !== void 0)
    $$bindings.htmlContent(htmlContent);
  return `${validate_component(Editor, "Editor").$$render(
    $$result,
    {
      conf,
      apiKey: "gogaa28ubjnm57h7vfteo9pod8j45tjfsdolci468lpp2m7v",
      value: htmlContent
    },
    {},
    {}
  )}   `;
});
const tableContent_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.svelte-1qfvy0d.svelte-1qfvy0d.svelte-16vepmd{max-width:280px;position:fixed;top:50%;right:8px;translate:0% -50%;z-index:10\r\n    }.sidebar-toggle.svelte-1qfvy0d.svelte-1qfvy0d.svelte-16vepmd,.table-of-contents.svelte-1qfvy0d.svelte-1qfvy0d.svelte-16vepmd{padding:24px;background-color:hsl(210 7% 11%);border-top:1px solid hsl(0 0% 19%);border-left:1px solid hsl(0 0% 19%);border-radius:20px;box-shadow:0px 0px 4px 4px hsl(0 0% 0% / 4%)}.table-of-contents.svelte-1qfvy0d.svelte-1qfvy0d.svelte-16vepmd{counter-reset:section\r\n    }.table-of-contents-title.svelte-1qfvy0d.svelte-1qfvy0d.svelte-16vepmd{font-size:16px;line-height:clamp(32px,6vw,48px);text-transform:uppercase;color:hsl(0 0% 98%);font-weight:bold}",
  map: null
};
const TableContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenTableContent, $$unsubscribe_hiddenTableContent;
  $$unsubscribe_hiddenTableContent = subscribe(hiddenTableContent, (value) => $hiddenTableContent = value);
  $$result.css.add(css);
  $$unsubscribe_hiddenTableContent();
  return `<aside class="svelte-1qfvy0d svelte-16vepmd"><section><button class="sidebar-toggle svelte-1qfvy0d svelte-16vepmd" aria-label="Show table of contents" style="" ${$hiddenTableContent ? "hidden" : ""}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" width="24" height="24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path></svg></button> <div class="table-of-contents svelte-1qfvy0d svelte-16vepmd" style="" ${!$hiddenTableContent ? "hidden" : ""}><button aria-label="Hide table of contents" class="svelte-1qfvy0d" data-svelte-h="svelte-aylogi"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" width="24" height="24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path></svg></button> <h2 class="table-of-contents-title svelte-1qfvy0d svelte-16vepmd" data-svelte-h="svelte-1wazmh1">Table of contents</h2> ${slots.default ? slots.default({}) : ``}</div></section></aside>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_hiddenDrawer;
  let $$unsubscribe_hiddenLinkTosDrawer;
  let $$unsubscribe_hiddenViewJsonDrawer;
  $$unsubscribe_hiddenDrawer = subscribe(hiddenDrawer, (value) => value);
  $$unsubscribe_hiddenLinkTosDrawer = subscribe(hiddenLinkTosDrawer, (value) => value);
  $$unsubscribe_hiddenViewJsonDrawer = subscribe(hiddenViewJsonDrawer, (value) => value);
  let { data } = $$props;
  let loadHead = data.loadHead;
  let template = data.template;
  let htmlContent = "";
  template.id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_hiddenDrawer();
  $$unsubscribe_hiddenLinkTosDrawer();
  $$unsubscribe_hiddenViewJsonDrawer();
  return `${$$result.head += `<!-- HEAD_svelte-1889ub_START --><!-- HTML_TAG_START -->${loadHead}<!-- HTML_TAG_END --><!-- HEAD_svelte-1889ub_END -->`, ""} ${validate_component(TableContent, "TableContent").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Sidebar, "Sidebar").$$render(
        $$result,
        {
          canEdit: template.type !== "html",
          useEditor: template.editor
        },
        {},
        {}
      )}`;
    }
  })} ${template.editor ? `<div class="overflow-hidden">${validate_component(EditorPage, "EditorPage").$$render($$result, { htmlContent }, {}, {})}</div>` : `<div class="lg:flex lg:items-center w-full z-50"><div class="w-full"><!-- HTML_TAG_START -->${htmlContent}<!-- HTML_TAG_END --></div></div>`} ${validate_component(EditContentPopup, "EditContentPopup").$$render($$result, { template }, {}, {})} ${validate_component(EditLinkTosPopup, "EditLinkTosPopup").$$render($$result, { template }, {}, {})} ${validate_component(ViewPopup, "ViewPopup").$$render($$result, { template }, {}, {})}`;
});
export {
  Page as default
};

import { s as subscribe, g as get_store_value } from "./utils.js";
import { c as create_ssr_component, e as escape } from "./ssr.js";
import { n as notification, u as updateNotification } from "./store.js";
const NotificationComponent_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.k-toast.svelte-eqvs57{max-width:280px;position:fixed;top:10%;right:8px;translate:0% -50%;z-index:99999999999999\r\n    }",
  map: null
};
const NotificationComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notification, $$unsubscribe_notification;
  $$unsubscribe_notification = subscribe(notification, (value) => $notification = value);
  let countdown;
  const typeMap = {
    success: `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="sr-only">Check icon</span>
            </div>`,
    warning: `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                </svg>
                <span class="sr-only">Warning icon</span>
            </div>`,
    error: `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
                <span class="sr-only">Error icon</span>
            </div>`
  };
  function run() {
    const n = get_store_value(notification);
    let seconds = n.time ?? 5;
    if (n.clearInterval) {
      clearInterval(countdown);
    } else {
      countdown = setInterval(
        function() {
          seconds--;
          if (seconds === 0) {
            updateNotification("hidden", "", true);
            clearInterval(countdown);
          }
        },
        1e3
      );
    }
  }
  $$result.css.add(css);
  {
    run();
  }
  $$unsubscribe_notification();
  return `<aside class="k-toast animate-bounce svelte-eqvs57" ${$notification.status === "hidden" ? "hidden" : ""}><section><div class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><!-- HTML_TAG_START -->${$notification.status in typeMap ? typeMap[$notification.status] : typeMap.success}<!-- HTML_TAG_END --> <div class="ms-3 text-sm font-normal">${escape($notification.message)}</div> <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" data-svelte-h="svelte-1g7beka"><span class="sr-only">Close</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div></section></aside>`;
});
export {
  NotificationComponent as N
};

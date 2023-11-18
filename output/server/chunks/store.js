import { w as writable } from "./index.js";
const templateTypes = ["html", "css", "js"];
let defaultTemplateTableCriteria = {
  partial: false,
  types: ["html"]
};
let api = writable("http://localhost:8080");
let notification = writable({
  message: "",
  status: "hidden",
  time: 5,
  clearInterval: false
});
let hiddenDrawer = writable(true);
let hiddenLinkTosDrawer = writable(true);
let hiddenTableContent = writable(true);
let hiddenViewJsonDrawer = writable(true);
const updateNotification = (status, message, clearInterval = false) => {
  notification.set({
    message,
    status,
    time: 5,
    clearInterval
  });
};
export {
  api as a,
  hiddenLinkTosDrawer as b,
  hiddenViewJsonDrawer as c,
  defaultTemplateTableCriteria as d,
  hiddenTableContent as e,
  hiddenDrawer as h,
  notification as n,
  templateTypes as t,
  updateNotification as u
};

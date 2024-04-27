import { label, phone } from "./dom.js";
const styles = "ring-offset-2 ring-2 ring-blue-500";

phone.focus(function (e) {
  label.addClass(styles);
  e.preventDefault();
});

phone.blur(function (e) {
  label.removeClass(styles);
  e.preventDefault();
});

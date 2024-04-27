import $ from "jquery";
import { button, main } from "./dom.js";

button.click(function (e) {
  $(this).fadeOut();
  setTimeout(() => main.fadeIn(), 350);
  e.preventDefault();
});

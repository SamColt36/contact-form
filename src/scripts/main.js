import "../styles/styles.css";
import "./auxiliary-functions.js";
import "./dom.js";
import "./focus-input-tel.js";
import "./menu-trigger.js";
import "./validate-input-email.js";
import "./validate-input-name.js";
import "./validate-input-tel.js";

import $ from "jquery";
import { phone, nome, email, submit, reset, main, button } from "./dom.js";
import {
  blockSubmit,
  resetForm,
  empty,
} from "./auxiliary-functions.js";

$('input:not([type="submit"]):not([type="reset"])').on("blur", function (e) {
  nome.val() !== empty && email.val() !== empty && phone.val() !== empty
    ? submit
        .removeAttr("disabled")
        .addClass("cursor-pointer")
        .removeClass("cursor-not-allowed")
    : blockSubmit();

  e.preventDefault();
});

reset.click(function (e) {
  setTimeout(resetForm, 350);
  console.clear();
  e.preventDefault();
});

submit.click(function (e) {
  setTimeout(() => {
    resetForm();
    main.fadeOut();
    button.fadeIn();
    window.open("https://github.com/SamColt36/contact-form", "_blank");
  }, 500);
  e.preventDefault();
});

export { resetForm, empty };

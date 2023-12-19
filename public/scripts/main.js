import { phone, nome, email, submit, reset, main, button } from "./dom.js";
import {
  alertCuston,
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
    window.open("https://github.com/SamColt36", "_blank");
  }, 500);
  e.preventDefault();
});

export { resetForm, empty, alertCuston };

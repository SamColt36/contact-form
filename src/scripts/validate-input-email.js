import $ from "jquery";
import { email } from "./dom.js";
import { empty } from "./auxiliary-functions.js";
export { validateInputTypeEmail };

const checkWordsInputTypeEmail = (str, obj) => {
  const condition = str.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);

  if (!condition) {
    return obj.val(empty);
  }
  return true;
};

const validateInputTypeEmail = (str, obj) => {
  if (str === empty) {
    return obj.val(empty);
  }
  return checkWordsInputTypeEmail(str, obj);
};

email.blur(function (e) {
  const str = $(this).val().trim();

  validateInputTypeEmail(str, $(this));
  e.preventDefault();
});

import $ from "jquery";
import { phone } from "./dom.js";
import { empty } from "./auxiliary-functions.js";
export { validateInputTypeTel };

const validateInputTypeTel = (obj) => {
  const length = obj.val().length;

  if (length !== 11) {
    return obj.val(empty);
  }
  return true;
};

phone.on("blur", function (e) {
  validateInputTypeTel($(this));
  e.preventDefault();
});

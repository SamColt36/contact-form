import { phone } from "./dom.js";
import { empty, alertCuston } from "./auxiliary-functions.js";
export { validateInputTypeTel };

const validateInputTypeTel = (obj) => {
  const length = obj.val().length;
  if (length !== 11) {
    alertCuston("INPUT TEL: Número digitado errado!");
    obj.val(empty);
    return false;
  }
  return true;
};

phone.blur(function (e) {
  validateInputTypeTel($(this));
  e.preventDefault();
});

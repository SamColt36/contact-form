import $ from "jquery";
import { nome } from "./dom.js";
import { empty, alertCuston } from "./auxiliary-functions.js";
export { validateInputTypeName };

const checkWordsInputTypeName = (array, obj) => {
  for (let index = 0; index < array.length; index++) {
    const condition = array[index].match(/^[a-záàâãéèêíïóôõöúçñ ]+$/i);

    if (!condition) {
      return obj.val(empty);
    }
  }
  return true;
};

const validateInputTypeName = (array, obj) => {
  const length = array.length;
  // Não contém nada e for somente um nome
  if (length === empty || length <= 2) obj.val(empty);
  // Contém nome válido com pelo menos duas palavras
  else if (length > 2) return checkWordsInputTypeName(array, obj);
};

nome.blur(function (e) {
  const nomes = $(this).val().trim().split(" ");

  validateInputTypeName(nomes, $(this));
  e.preventDefault();
});

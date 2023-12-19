import { nome } from "./dom.js";
import { empty, alertCuston } from "./auxiliary-functions.js";
export { validateInputTypeName };

const checkWordsInputTypeName = (array, obj) => {
  for (let index = 0; index < array.length; index++) {
    const condition = array[index].match(/^[a-záàâãéèêíïóôõöúçñ ]+$/i);

    if (!condition) {
      alertCuston("INPUT NOME: Caracteres inválidos!");
      obj.val(empty);
      return false;
    }
  }
  return true;
};

const validateInputTypeName = (array, obj) => {
  const length = array.length;
  // Não contém nada e for somente um nome
  if (length === empty || length <= 2) {
    alertCuston("INPUT NOME: Insira pelo menos três nomes!");
    obj.val(empty);
    return false;
  }
  // Contém nome válido com pelo menos duas palavras
  else if (length > 2) return checkWordsInputTypeName(array, obj);
};

nome.blur(function (e) {
  const nomes = $(this).val().trim().split(" ");

  validateInputTypeName(nomes, $(this));
  e.preventDefault();
});

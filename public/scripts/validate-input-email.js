import { email } from './dom.js'
import { empty, alertCuston } from './auxiliary-functions.js'
export { validateInputTypeEmail }

const checkWordsInputTypeEmail = (str, obj) => {
	const condition = str.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)

	if (!condition) {
		alertCuston('INPUT EMAIL: Caracteres inválidos!')
		obj.val(empty)
		return false
	}
	return true
}

const validateInputTypeEmail = (str, obj) => {
	// Não contém nada
	if (str === empty) {
		alertCuston('INPUT EMAIL: Insira um email válido!')
		obj.val(empty)
		return false
	}
	else return checkWordsInputTypeEmail(str, obj)
}

email.blur(function (e) {
	const str = $(this).val().trim()

	validateInputTypeEmail(str, $(this))
	e.preventDefault()
})
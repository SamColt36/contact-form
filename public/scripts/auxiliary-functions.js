import { submit } from './dom.js'
const empty = ''

const alertCuston = (str) => {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: str,
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>'
	})
}

const blockSubmit = () => submit.attr('disabled', 'disabled').removeClass('cursor-pointer').addClass('cursor-not-allowed')

const resetForm = () => {
	$('input:not([type="submit"]):not([type="reset"])').val(empty)
	blockSubmit()
}

export { alertCuston, blockSubmit, resetForm, empty }
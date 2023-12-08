import { button, main, close } from './dom.js'
import { resetForm } from './auxiliary-functions.js'

button.click(function (e) {
	$(this).fadeOut()
	setTimeout(() => main.fadeIn(), 350)
	e.preventDefault()
})

close.click(function (e) {
	main.fadeOut()

	setTimeout(() => {
		button.fadeIn()
		resetForm()
	}, 350)
	e.preventDefault()
})

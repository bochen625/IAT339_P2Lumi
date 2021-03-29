'use strict';

console.log('Javascript is running');

/*Get the modal*/
var modal = document.getElementById("lightQuizModal");

/*Search for quizCTA button*/
var quizToggle = document.querySelector('#quizCTA');

/*What happens if it gets clicked*/
quizToggle.addEventListener('click',

	function(){
		console.log('quizToggle has been clicked');

		// if (menu.classList.contains('hidden')){
		// 	console.log('Menu is hidden, showing the menu');

		// 	menu.classList.remove('hidden');
		// 	menu.setAttribute('aria-hidden', 'false'); /*this is for accessibility*/
		// 	menu.setAttribute('aria-expanded', 'true');

		// 	menuFristItem.focus(); /*for even better accessibility*/
		// }
		// else{
		// 	console.log('Menu is visible, hiding the menu');

		// 	menu.classList.add('hidden');
		// 	menu.setAttribute('aria-hidden', 'true');
		// 	menu.setAttribute('aria-expanded', 'false');
		// }
	}
	);

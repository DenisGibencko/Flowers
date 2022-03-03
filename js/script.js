"use strict"

function ibg(){

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();


let body = document.querySelector('body'); 
let menuBody = document.querySelector('.header__menu');
let menuIcon = document.querySelector('.header__icon');

menuIcon.addEventListener("click", function(e){
	body.classList.toggle("_lock");
	menuBody.classList.toggle("_active");
	menuIcon.classList.toggle("_active");
})

let menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => 
	menuLink.addEventListener("click", function(e){
			body.classList.remove("_lock");
		menuBody.classList.remove("_active");
		menuIcon.classList.remove("_active");
	})
)


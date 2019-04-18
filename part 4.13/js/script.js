const button = document.querySelector('button');
const popup = document.querySelector('div .popup');
const closePopup = document.querySelector('div .closePopup');


const menu = document.querySelector('.menu');
menu.style.transition = ('2s');

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


button.onclick = () => {
	popup.style.display = 'flex';
}

closePopup.onclick = () => {
	popup.style.display = 'none';
}

openMenu.onclick = () => {
	
	menu.style.left = '0';
}

closeMenu.onclick = () =>{
	
	menu.style.left = '-50vw';
}


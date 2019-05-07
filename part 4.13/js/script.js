const button = document.querySelector('button');
const popup = document.querySelector('div .popup');
const closePopup = document.querySelector('div .closePopup');


const menu = document.querySelector('.menu');
menu.style.transition = ('2s');

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
openMenu.onclick = () => {
	menu.style.left = '0';
	
}
closeMenu.onclick = () =>{
	menu.style.left = '-50vw';
}


// button.onclick = () => {
// 	popup.style.display = 'flex';
// 	document.querySelector('.popup_container').style.display = 'flex';
// }

// closePopup.onclick = () => {
// 	popup.style.display = 'none';
// 	document.querySelector('.popup_container').style.display = 'none';
// }
// document.querySelector('.popup_container').onclick = ()=>{
// 	popup.style.display = 'none';
// 	document.querySelector('.popup_container').style.display = 'none';
// }
button.onclick = () => {
	popup.classList.add("disflex");
	document.querySelector('.popup_container').classList.add("disflex");
	popup.classList.remove("disnone");
	document.querySelector('.popup_container').classList.remove("disnone");
}
document.querySelector('.popup_container').onclick = ()=>{
	popup.classList.add("disnone");
	document.querySelector('.popup_container').classList.add("disnone");
	popup.classList.remove("disflex");
	document.querySelector('.popup_container').classList.remove("disflex");
}
closePopup.onclick = () => {
	popup.classList.add("disnone");
	document.querySelector('.popup_container').classList.add("disnone");
	popup.classList.remove("disflex");
	document.querySelector('.popup_container').classList.remove("disflex");
}

addEventListener('keydown', function(event) {
    if (event.keyCode == 27)
    popup.classList.add("disnone");
	document.querySelector('.popup_container').classList.add("disnone");
	popup.classList.remove("disflex");
	document.querySelector('.popup_container').classList.remove("disflex");
});



// button.addEventListener("click", function() {
//     console.log("Щёлк!");
//   });

 // button.addEventListener("mousedown", function(event) {
 //    if (event.which == 1)
 //      console.log("Левая");
 //    else if (event.which == 2)
 //      console.log("Средняя");
 //    else if (event.which == 3)
 //      console.log("Правая");
 //  })
 // google - event.which


//событие происходит по: 
//keydown - когда клавища нажимается
//keyup - когда кливища отпускается
//keypress - когда клавиша нажата
//keyCode - порядковый номер клавиши

// addEventListener('keydown', function(event) {
//     if (event.keyCode == 27)
//     	popup.style.display = 'none';
// 		document.querySelector('.popup_container').style.display = 'none';
// });
// addEventListener('keyup', ()=>{
// 	if(event.keyCode == 27){
// 		popup.style.display = 'flex';
// 		document.querySelector('.popup_container').style.display = 'flex';
// 	}
// 	console.log('Ok, now, live with it!');

// });
// addEventListener('mousedown', ()=>{
// 	console.log('You clicked the mouse, easy, easy, you harm it');
// });
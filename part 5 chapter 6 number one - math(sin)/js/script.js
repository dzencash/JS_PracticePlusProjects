console.log('You are at '+window.location);


// Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. Вам понадобится найти этот метод объекта Math.

const form = document.forms[0];

const submit = document.querySelector('button')

const result = document.querySelector('.result');
const pi = Math.PI;


// submit.onclick = (e, angle) =>{
// 	e.preventDefault();
// 	result.innerHTML = Math.sin(radian).toFixed(1);
// }

submit.onclick = function(e){
	e.preventDefault();
	let angle = document.forms[0].elements.angle.value;
	let radian = (angle*pi)/180;
	(form.elements[1].checked == true) ? result.innerHTML = Math.sin(radian) : result.innerHTML = Math.sin(radian).toFixed(1);
	
}


// console.log('You are at '+window.location)

const APIKey = '8e40478898eb0fcc5bb92a0f00ae7c3d';

document.forms[0][2].onclick = (e)=>{
	e.preventDefault();
	var city = document.forms[0][1].value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();



	if(xhr.status !=200){
		console.log('You have got a failure: '+xhr.status + ' '+ xhr.statusText);	
		document.forms[0][4].value = 'Please, open console'
	}else{
		var DATA = JSON.parse(xhr.responseText);
	}
	document.forms[0][4].value = parseInt(DATA.main.temp-273)+' \u2103';


}


let today = new Date;
let monthName = [
	'Января',
	'Февраля',
	'Марта',
	'Апрель',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря',
]

document.querySelector('h1 span').innerHTML = today.getDay()+' '+monthName[today.getMonth()]+' '+today.getFullYear();

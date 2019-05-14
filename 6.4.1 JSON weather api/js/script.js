<<<<<<< HEAD
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
		console.log(JSON.parse(xhr.responseText))
	}
	document.forms[0][4].value = parseInt(DATA.main.temp-273)+' \u2103';
	document.forms[0][5].value = DATA.wind.speed + ' м/с';
	document.forms[0][6].value = DATA.weather[0].description;

	let searchRequest = document.forms[0][6].value;
	let pullRequest = 'https://www.google.com/search?=1366&bih=632&tbm=isch&sa=1&ei=g&q='+searchRequest+'&oq='+searchRequest+'&gs_l=img.12...0.0..26262...0.0..0.0.0.......0......gws-wiz-img.6auo_JNRpkY'
	document.querySelector('a')['href'] = pullRequest;

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

=======
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
>>>>>>> beb73fd938bb8bd3cd6590b3ba240fce14154b84

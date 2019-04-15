console.log('You are at '+window.location);


// let submit = document.getElementById('submit'); работает и так и так
let submit = document.querySelector('#submit');

// let date = document.getElementById('date').value;



//Выберем кнопку
// let form = document.querySelector('form');
//Специальный методы выбора форм. Если выбрать [0] - получим HTML коды формы. 
//При применении специальной команды .elements - получим HTML коллекцию в виде массива где в качестве ключей и значений будут все inputs
//Если допишем .nameOfInput то сможем обратиться к конкретному Input по name

// const form = document.forms[0].elements.date;
const insert = document.querySelector('.answer #date');
const expect = document.querySelector('.answer #expect');
const meetings = document.querySelector('.answer #meetings');
const guests = document.querySelector('.answer #guest');
const buyers = document.querySelector('.answer #buyers');
const gainOne = document.querySelector('.answer #gainOne');
const gainTwo = document.querySelector('.answer #gainTwo');
const gainThree = document.querySelector('.answer #gainThree');


const form = document.forms[0];
console.log(form[0]);
console.log(form[1]);




submit.onclick = function (e){
	e.preventDefault();
	insert.innerHTML = form.elements.date.value;
	expect.innerHTML = '1. Ожидания на сегодня: ' + form.elements.expectMoney.value;
	meetings.innerHTML = 'Встречи: ' + form.elements.expectMeet.value;
	guests.innerHTML = 'Гостевые: ' + form.elements.expectGuests.value;
	buyers.innerHTML = 'Покупки: ' + form.elements.expectBuy.value;
	gainOne.innerHTML = '1: ' + form.elements.gainOne.value;
	gainTwo.innerHTML = '2: ' + form.elements.gainTwo.value;
	gainThree.innerHTML = '3: ' + form.elements.gainThree.value;
}


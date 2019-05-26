console.log('You are at '+window.location);

// ----------------------------------------------------
// 1. Не целое число в графе Деньги, На менеджера
// 2. Нет автоматической подстановки даты
// 3. Считает план от даты например 31 - 1 мая = план на 30 дней, а надо на 31 (смотри по тегу #dateValue)
// ----------------------------------------------------




// let submit = document.getElementById('submit'); работает и так и так
let submit = document.querySelector('#submit');

// let date = document.getElementById('date').value;



//Выберем кнопку
// let form = document.querySelector('form');
//Специальный методы выбора форм. Если выбрать [0] - получим HTML коды формы. 
//При применении специальной команды .elements - получим HTML коллекцию в виде массива где в качестве ключей и значений будут все inputs
//Если допишем .nameOfInput то сможем обратиться к конкретному Input по name

// const form = document.forms[0].elements.date;
const form = document.forms[0];

const insert = document.querySelector('.answer #date');
const expect = document.querySelector('.answer #expect');
const meetingsPlace = document.querySelector('.answer #meetings');
const guestsPlace = document.querySelector('.answer #guest');
const buyersPlace = document.querySelector('.answer #buyers');
const gainOne = document.querySelector('.answer #gainOne');
const gainTwo = document.querySelector('.answer #gainTwo');
const gainThree = document.querySelector('.answer #gainThree');

// Описания ожиданий на сегодня start
const expectFromPlace = document.querySelector('.answer #expectFromPlace');
const expectToPlace = document.querySelector('.answer #expectToPlace');


// Описания ожиданий на сегодня end
//Plan of the month total plus for manager
const planMonthPlace = document.querySelector('.answer #planMonthPlace');
cartPlace = document.querySelector('.answer #cart');
cartManagerPlace = document.querySelector('.answer #cartManager');
moneyManagerPlace = document.querySelector('.answer #moneyManager');

const factMonth = form.elements.moll.value;
	// const todayDate = parceInt(dateForm);
	

submit.onclick = function (e){
	e.preventDefault();
	// Описания ожиданий на сегодня start
	// var buyers = form.elements.expectBuy.value;
	var expectFrom = (form.elements.expectBuy.value*11900);
	var expectTo = (form.elements.expectBuy.value*20815);
	console.log(expectFrom);
	console.log(expectTo);

	expectFromPlace.innerHTML = expectFrom;
	expectToPlace.innerHTML = expectTo;
	;
	// Описания ожиданий на сегодня end
	//Расчет план на день в деньгах, картах и на менеджера start

	//Расчет план на день в деньгах, картах и на менеджера start

	// const planMonth = form.elements.plan.value;
	
	

	//Расчет план на день в деньгах, картах и на менеджера end

	//тег #dateValue
	var dateValue = parseInt(form.elements.date.value);
	dateValue = (dateValue-1);
	console.log(dateValue)


	var planDay = (form.elements.plan.value-form.elements.moll.value)/(31-(dateValue));
	// console.log(planDay)
	planMonthPlace.innerHTML = '2.1 Деньги: ' + planDay;
	cartPlace.innerHTML = '2.2 КК: ' + parseInt((planDay/15000));
	cartManagerPlace.innerHTML = parseInt(((planDay/15000)/2)) + ' клубных карт. и ';
	moneyManagerPlace.innerHTML = (planDay/2)+ ' руб.';

	// planMonthPlace.innerHTML = '2.1 Деньги: ' + (form.elements.plan.value-form.elements.moll.value)/(30-parseInt(form.elements.date.value));
	// cartPlace.innerHTML = '2.2 КК: ' + parseInt(((form.elements.plan.value-form.elements.moll.value)/(30-parseInt(form.elements.date.value))/15000));
	// cartManagerPlace.innerHTML = parseInt((((form.elements.plan.value-form.elements.moll.value)/(30-parseInt(form.elements.date.value))/15000)/2)) + ' клубных карт. и ';
	// moneyManagerPlace.innerHTML = ((form.elements.plan.value-form.elements.moll.value)/(30-parseInt(form.elements.date.value))/2)+ ' руб.';

	//Расчет план на день в деньгах, картах и на менеджера end
	insert.innerHTML = 'Дата: ' + form.elements.date.value;
	
	// expect.innerHTML = '1. Ожидания на сегодня: ' + form.elements.expectMoney.value;
	meetingsPlace.innerHTML = 'Встречи: ' + form.elements.expectMeet.value;
	guestsPlace.innerHTML = 'Гостевые: ' + form.elements.expectGuests.value;
	
	buyersPlace.innerHTML = 'Покупки: ' + form.elements.expectBuy.value;

	gainOne.innerHTML = '4.1: ' + form.elements.gainOne.value;
	gainTwo.innerHTML = '4.2: ' + form.elements.gainTwo.value;
	gainThree.innerHTML = '4.3: ' + form.elements.gainThree.value;


}


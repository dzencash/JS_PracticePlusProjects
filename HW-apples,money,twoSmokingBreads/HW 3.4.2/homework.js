
// --------------------------------------------------------------------
// 3.4.2


// let money = prompt('Сколько денег у вас с собой?');
// let apple = prompt('Сколько вы купили яблок?');
// let bread = prompt('Сколько вы купили батонов хлеба?');
// let priceOfApple = prompt('Сколько стоит одно яблоко?');
// let priceOfBread = prompt('Сколько стоит один батон хлеба?');
// let amountOfBread = Number(bread);
// let amountOfApple = Number(apple);
// let moneyOfBread = Number(priceOfBread);
// let moneyOfApple = Number(priceOfApple);
// let totalPriceBread = moneyOfBread*amountOfBread;
// let totalPriceApple = moneyOfApple*amountOfApple;
// let totalPriceOfAllItem = totalPriceBread+totalPriceApple; 
// let answerBoolean = money >= totalPriceOfAllItem;
// let answer = (answerBoolean>0) ? 'Вам хватает денег на покупки!' : 'Увы, сегодня без яблок и хлеба!';
// document.write(answer)


// --------------------------------------------------------------------
// 4.8.1


// const heading = document.querySelector('h1');



// let haveEnough = (element) =>{
	
// 	money = Number(prompt('Сколько денег у вас с собой?'));
// 	amountOfApple = Number(prompt('Сколько вы купили яблок?'));
// 	moneyOfApple = Number(prompt('Сколько стоит одно яблоко?'));
// 	amountOfBread = Number(prompt('Сколько вы купили батонов хлеба?'));
// 	moneyOfBread = Number(prompt('Сколько стоит один батон хлеба?'));
// 	totalPriceBread = moneyOfBread*amountOfBread;
// 	totalPriceApple = moneyOfApple*amountOfApple;
// 	totalPriceOfAllItem = (totalPriceBread+totalPriceApple); 
// 	answerBoolean = money >= totalPriceOfAllItem;
// 	answer = (answerBoolean>0) ? 'Вам хватает денег на покупки!' : 'Увы, сегодня без яблок и хлеба!';
	// element.innerHTML = answer;
// }

// haveEnough (heading);


// --------------------------------------------------------------------

// 4.8.1 тестируем


// const heading = document.querySelector('h1');

// 	// Сколько денег есть?
//   	let myMoney = Number(prompt('Сколько денег у вас с собой?'));
// 	// Вычисления стоимости покупок?
// 	let amountOfApple = Number(prompt('Сколько вы купили яблок?'));
// 	let moneyOfApple = Number(prompt('Сколько стоит одно яблоко?'));
// 	let amountOfBread = Number(prompt('Сколько вы купили батонов хлеба?'));
// 	let moneyOfBread = Number(prompt('Сколько стоит один батон хлеба?'));
// 	let sumOfItems = ((moneyOfBread*amountOfBread)+(moneyOfApple*amountOfApple));
// 	let answer = Number(myMoney>=sumOfItems);
	
// let haveEnough = (element, myMoney, sumOfItems) =>{
// 	if(answer>0){
// 		return 'Вам хватает денег на покупки!';
// 	}else{
// 		return 'Увы, сегодня без яблок и хлеба!';
// 	}
// }

// haveEnough (heading, myMoney, sumOfItems);

// // 4.8.1 тестируем2

// const heading = document.querySelector('h1');

// // Сколько денег есть?
// let myMoney = Number(prompt('Сколько денег у вас с собой?'));
// // Вычисления стоимости покупок?
// let amountOfApple = Number(prompt('Сколько вы купили яблок?'));
// let moneyOfApple = Number(prompt('Сколько стоит одно яблоко?'));
// let amountOfBread = Number(prompt('Сколько вы купили батонов хлеба?'));
// let moneyOfBread = Number(prompt('Сколько стоит один батон хлеба?'));
// // Тогда получаем возможность вычислисть стоимость покупок
// let sumOfItems = ((moneyOfBread*amountOfBread)+(moneyOfApple*amountOfApple)); 

// let haveEnough = (myMoney, sumOfItems) =>{
	
// 	var 

// 	if(myMoney>=sumOfItems){
// 		return ('Вам хватает денег на покупки!');
// 	}else{
// 		return ('Увы, сегодня без яблок и хлеба!');
// 	}

// 	// (myMoney >= sumOfItems) ? console.log('Вам хватает денег на покупки!') : console.log('Увы, сегодня без яблок и хлеба!');


// }

// // heading.innerHTML = haveEnough (myMoney, sumOfItems);

// 4.8.1 тестируем3

const heading = document.querySelector('h1');

// Сколько денег есть?
let myMoney = Number(prompt('Сколько денег у вас с собой?'));
// Вычисления стоимости покупок?
let amountOfApple = Number(prompt('Сколько вы купили яблок?'));
let moneyOfApple = Number(prompt('Сколько стоит одно яблоко?'));
let amountOfBread = Number(prompt('Сколько вы купили батонов хлеба?'));
let moneyOfBread = Number(prompt('Сколько стоит один батон хлеба?'));
// Тогда получаем возможность вычислисть стоимость покупок - эти полномочия передадим функции
 
let haveEnough = (myMoney, amountOfApple, moneyOfApple, amountOfBread, moneyOfBread) =>{
	
	var sumOfItems = ((moneyOfBread*amountOfBread)+(moneyOfApple*amountOfApple)); 

	if(myMoney>=sumOfItems){
		return ('Вам хватает денег на покупки!');
	}else{
		return ('Увы, сегодня без яблок и хлеба!');
	}

}

// heading.innerHTML = haveEnough (myMoney, sumOfItems);

console.log('You are at '+window.location);


let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
];





// Создадим контейнер для блоков вложений, присвоим классНейм и заголовок
let container = document.createElement('div');
container.className = 'crypto-container';
container.innerHTML = '<h1><strong>The price</strong> of coins: </h1>';
//Создадим 3 блока, присвоим им АйдиНейм, Добавим заголовки 
let divOne = document.createElement('div');
divOne.className = 'crypto-item';
divOne.style.width = '20rem';
divOne.innerHTML = '<h2><strong>'+crypto[0].name+'</strong><p>'+crypto[0].price+'</p></h2>';

let divTwo = document.createElement('div');
divTwo.className = 'crypto-item';
divTwo.style.width = '20rem';
divTwo.innerHTML = '<h2><strong>'+crypto[1].name+'</strong><p>'+crypto[1].price+'</p></h2>';

let divThree = document.createElement('div');
divThree.className = 'crypto-item';
divThree.style.width = '20rem';
divThree.innerHTML = '<h2><strong>'+crypto[2].name+'</strong><p>'+crypto[2].price+'</p></h2>';

//Сделаем цену шрифтом поменьше
window.onload = ()=>{
for(let i = 0; i<document.getElementsByTagName('p').length;i++){
document.getElementsByTagName('p')[i].style.fontSize = '.8rem';
document.getElementsByTagName('p')[i].style.fontWeight = '550';
}
};




//Зададим для всех родительский элемент, чтобы было понятно где разместить созданные выше элементы
let parentElement = document.body;

//Добавим в родительский элемент блок-контейнер 
parentElement.appendChild(container);

//Выберем его, работают оба способа
// let cryptoContainer = document.querySelector('.crypto-container');
let cryptoContainer = container;

//Разместим в выбранном родительском элементе - все вложенные
cryptoContainer.appendChild(divOne);
// cryptoContainer.appendChild(divTwo);
cryptoContainer.appendChild(divThree);

//Во имя новых знаний - добавим 
//родительскийЭлемент.insertBefore(новыйЭлемент, передЭтимЭлементом)
cryptoContainer.insertBefore(divTwo, divThree);
//И это так же должно работать если мы выбираем элемент по индексу в обьекте, но почему-то путает местами
// cryptoContainer.insertBefore(divTwo, container[1]);



//Добавим в div внутри .crypto-container - блок, для визуализации цены
let parentItem = document.querySelectorAll('.crypto-item');
// console.log(parentItem[0]);

//На этом этапе боролся с ошибкой: TypeError: Argument 1 of Node.appendChild is not an object. 
//Решение: порядок действий. 
//1.Создать элемент>2.Разместить элемент 
let divOneBar = document.createElement('div');
divOneBar.id = 'bitcoin';
divOne.appendChild(divOneBar);
// divOneBar.style.width = '20rem';
divOneBar.style.maxWidth = '25rem';
divOneBar.style.height = '1rem'
divOneBar.style.backgroundColor = 'red';


let divTwoBar = document.createElement('div');
divTwoBar.id = 'ethereum';
divTwo.appendChild(divTwoBar);
// divTwoBar.style.width = '16rem';
divTwoBar.style.maxWidth = '25rem';
divTwoBar.style.height = '1rem'
divTwoBar.style.backgroundColor = 'lightblue';

let divThreeBar = document.createElement('div');
divThreeBar.id = 'litecoin';
divThree.appendChild(divThreeBar);
// divThreeBar.style.width = '12rem';
divThreeBar.style.maxWidth = '25rem';
divThreeBar.style.height = '1rem';
divThreeBar.style.backgroundColor = ('#4FE3C2');


//Кнопка выбора 

let buttonChoise = document.createElement('button');
buttonChoise.id = 'button';
container.insertBefore(buttonChoise, divOne);
buttonChoise.style.height = '2rem';
buttonChoise.innerHTML = 'Set the Price of Crypto';
buttonChoise.style.fontSize = '1.3rem';
buttonChoise.style.fontWeight = '600';
buttonChoise.style.fontFamily ="Courier New";

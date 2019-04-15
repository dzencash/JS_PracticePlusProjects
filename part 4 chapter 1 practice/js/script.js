console.log('You are at '+window.location);


let number = prompt('Put number here');
let numberplace = document.querySelector('h1');
let bodydiv = document.querySelector('div');

bodydiv.style.backgroundColor = '#ffff';
bodydiv.style.textAlign = 'center';
numberplace.style.fontSize = '5em';

// Решение с использованием готового метода 
// if (number>=0) {
// 	numberplace.innerHTML = (number);
// }else if(number<0){
// 	numberplace.innerHTML = (Math.abs(number));
// } else {
// 	(alert('Введите число'));
// }


// Решение с прописыванием логики
// if (number>=0){
// 	numberplace.innerHTML = (number);
// } else if (number<0){
// 	numberplace.innerHTML = (-number)
// } else {
// 	alert('Введите число!')
// }


// Решение через тернарный оператор
(number>=0) ? numberplace.innerHTML = number : numberplace.innerHTML = -number;

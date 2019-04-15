const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let result = document.querySelector('article h3 span');
let you = document.querySelector('article h1 span');
let comp = document.querySelector('article h1:nth-child(2) span');
// Выведем в консоль результаты раунда
if (player==rock){
	// you.innerHTML = 'ROCK!';
	console.log("You've got ROCK!");
}else if(player==scissors){
	// you.innerHTML = 'Scissors!';
	console.log("You've got Scissors!");
}else if(player==paper){
	// you.innerHTML = 'Paper!';
	console.log("You've got Paper!");
}else{
	alert('Fail! Press F5 to repeat!')
}
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

if (computer==rock){
	// comp.innerHTML = 'ROCK!';
	console.log('Computer got ROCK!');
}else if(computer==scissors){
	// comp.innerHTML = 'Scissors!';
	console.log('Computer got Scissors!');
}else if(computer==paper){
	// comp.innerHTML = 'Paper!';
	console.log('Computer got Paper!');
}

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if ((player==0) && (computer==0)){
	// // alert('Try again!');
	// result.innerHTML = 'Try again!';
	console.log('Try again!');
}else if ((player==0) && (computer==1)){
	// // alert('Player win!');
	// result.innerHTML ="Player win!";
	console.log('Player win!');
}else if ((player==0) && (computer==2)){
	// // alert('Computer win!');
	// result.innerHTML ="Computer win!";
	console.log('Computer win!');
}else if ((player==1) && (computer==0)){
	// result.innerHTML ="Computer win!";
	console.log('Computer win!');
}else if ((player==1) && (computer==1)){
	// result.innerHTML ="Try again!";
	console.log('Try again!');
}else if ((player==1) && (computer==2)){
	// result.innerHTML = "Player win!";
	console.log('Player win!');
}else if ((player==2) && (computer==0)){
	// result.innerHTML ="Player win!";
	console.log('Player win!');
}else if ((player==2) && (computer==1)){
	// result.innerHTML ="Computer win!";
	console.log('Computer win!');
}else if ((player==2) && (computer==2)){
	// result.innerHTML ="Try again!";
	console.log('Try again!');
}else{
	// result.innerHTML = "You're lucky bastard, you've ruined the Game!"
	console.log("You're lucky bastard, you've ruined the Game!")
}
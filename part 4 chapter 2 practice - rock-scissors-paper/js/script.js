const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));

// Выведем в консоль результаты раунда
if (player==rock){
	console.log("You've got ROCK!");
}else if(player==scissors){
	console.log("You've got Scissors!");
}else if(player==paper){
	console.log("You've got Paper!");
}
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

if (computer==rock){
	console.log('Computer got ROCK!');
}else if(computer==scissors){
	console.log('Computer got Scissors!');
}else if(computer==paper){
	console.log('Computer got Paper!');
}

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if ((player==0) && (computer==0)){
	console.log('Try again!');
}else if ((player==0) && (computer==1)){
	console.log('Player win!');
}else if ((player==0) && (computer==2)){
	console.log('Computer win!');
}else if ((player==1) && (computer==0)){
	console.log('Computer win!');
}else if ((player==1) && (computer==1)){
	console.log('Try again!');
}else if ((player==1) && (computer==2)){
	console.log('Player win!');
}else if ((player==2) && (computer==0)){
	console.log('Player win!');
}else if ((player==2) && (computer==1)){
	console.log('Computer win!');
}else if ((player==2) && (computer==2)){
	console.log('Try again!');
}else{
	console.log("You're lucky bastard, you've ruined it all!")
}
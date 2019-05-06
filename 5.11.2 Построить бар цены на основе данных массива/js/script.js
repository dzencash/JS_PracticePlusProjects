// Нужно выбрать из массива самое большое число - взять его за 100% длинны и строить бар от него

let bitPrice = crypto[0].price;
let ethPrice = crypto[1].price;
let litPrice = crypto[2].price; 

let cryptoPrice = [bitPrice, ethPrice, litPrice];

console.log(crypto)
function compare(a,b){
  if (a>b) return 1;
  if (a<b) return -1;
}

cryptoPrice.sort(compare);
//Переменные bitPrice, ethPrice, litPrice - меняют свой индекс (место) после сортировки. И если мы зададим длинну блока в зависимости от измененного места блока через сравнение if(){} 


let maxWidth = cryptoPrice[2];
let midWidth = cryptoPrice[1];
let lowWidth = cryptoPrice[0];
console.log(maxWidth, midWidth, lowWidth);



let firstWidth = 100;
let secondWidth = parseInt((midWidth/maxWidth)*100);
let thirdWidth = parseInt((lowWidth/maxWidth)*100);


let myFucn = function(){
if(bitPrice>ethPrice && bitPrice>litPrice){
  divOneBar.style.width = firstWidth+'%';
  console.log('bitcoin is the biggest');
  var what = 'bitcoin';
  console.log('our champion is: '+what);
  divOneBar.style.width = firstWidth+'%';
}else{console.log('bitcoin is not the biggest')};

if(what == 'bitcoin' && ethPrice>litPrice){
	console.log('ethereum is the second');
  divTwoBar.style.width = secondWidth+'%';
  divThreeBar.style.width = thirdWidth+'%';
	console.log('litecoin is the last');
}if(what == 'bitcoin' && litPrice>ethPrice){
  console.log('litecoin is the second');
  console.log('ethereum is the last');
  divTwoBar.style.width = thirdWidth+'%';
  divThreeBar.style.width = secondWidth+'%';
}

if(ethPrice>bitPrice && ethPrice>litPrice){
  divTwoBar.style.width = firstWidth+'%';
  console.log('ethereum is the biggest');
  what = 'ethereum';
  console.log('our champion is: '+what);
  divTwoBar.style.width = firstWidth+'%';
}else{console.log('ethereum is not the biggest')};

if(what == 'ethereum' && bitPrice>litPrice){
	console.log('bitcoin is the second');
	console.log('litecoin is the last');
  divOneBar.style.width = secondWidth+'%';
  divThreeBar.style.width = thirdWidth+'%';
}if(what == 'ethereum' && litPrice>bitPrice){
  console.log('litecoin is the second');
  console.log('bitcoin is the last');
  divThreeBar.style.width = secondWidth+'%';
  divOneBar.style.width = thirdWidth+'%';
}


if(litPrice>bitPrice && litPrice>ethPrice){
  divThreeBar.style.width = firstWidth+'%';
  console.log('litecoin is the biggest');
  what = 'litecoin';
  console.log('our champion is: '+what);
  divThreeBar.style.width = firstWidth+'%';
}else{console.log('litecoin is not the biggest')};

if(what == 'litecoin' && bitPrice>ethPrice){
  console.log('bitcoin is the second');
  console.log('ethereum is the last');
  divOneBar.style.width = secondWidth+'%';
  divTwoBar.style.width = thirdWidth+'%';
}if(what == 'litecoin' && ethPrice>bitPrice){
  console.log('ethereum is the second');
  console.log('bitcoin is the last');
  divTwoBar.style.width = secondWidth+'%';
  divOneBar.style.width = thirdWidth+'%';
}
}
myFucn();

buttonChoise.onclick =()=>{
  bitPrice = Number(prompt('Set Bitcoin Price'));
  ethPrice = Number(prompt('Set Etherium Price'));
  litPrice = Number(prompt('Set Litecoin Price'));
  myFucn();

}

//Изменять name при изменении bitPrice, ethPrice, litPrice
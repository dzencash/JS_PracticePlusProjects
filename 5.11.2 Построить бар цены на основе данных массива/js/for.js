let divs = document.querySelectorAll('.crypto-item div');

let myNewFunc = ()=>{
  for(let i = 0; i<crypto.length; i++){
  divs[i].style.width = crypto[i].price + 'px';
}
}
myNewFunc();


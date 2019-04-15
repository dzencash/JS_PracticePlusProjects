console.log('You are at '+window.location);

// const liProjects = document.querySelector('header ul li:first-child');
// console.log(liProjects);



// (window.location = ///C:/Users/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0/Desktop/MSCjavascript/00001.Practice/01.portfolio/ver%201/index.html;
// ) ? liProjects.style.color = black : liProjects.style.color = white;


//События на странице projects

//project querySelector area start
const projectOne = document.querySelector('.collection div:nth-child(1)');
const projectTwo = document.querySelector('.collection div:nth-child(2)');
const projectThree = document.querySelector('.collection div:nth-child(3)');
const projectFour = document.querySelector('.collection div:nth-child(4)');
const projectFive = document.querySelector('.collection div:nth-child(5)');
const projectSix = document.querySelector('.collection div:nth-child(6)');
//project querySelector area end

//article querySelector area start
let article = document.querySelector('.collection div:nth-child(1) article');
let articleTwo = document.querySelector('.collection div:nth-child(2) article');
let articleThree = document.querySelector('.collection div:nth-child(3) article');
let articleFour = document.querySelector('.collection div:nth-child(4) article');
let articleFive = document.querySelector('.collection div:nth-child(5) article');
let articleSix = document.querySelector('.collection div:nth-child(6) article');


//article querySelector area end

//next code is work for projectOne area start
let addDefinit = () =>{article.style.opacity = '1';}
let deleteDefenit = () =>{article.style.opacity = '0';}


projectOne.addEventListener('mouseover', addDefinit);
projectOne.addEventListener('mouseout', deleteDefenit);
//next code is work for projectOne area finish

//next code is work for projectTwo area start
let addDefinitTwo = () =>{articleTwo.style.opacity = '1';}
let deleteDefenitTwo = () =>{articleTwo.style.opacity = '0';}


projectTwo.addEventListener('mouseover', addDefinitTwo);
projectTwo.addEventListener('mouseout', deleteDefenitTwo);
//next code is work for projectTwo area finish

//next code is work for projectThree area start
let addDefinitThree = () =>{articleThree.style.opacity = '1';}
let deleteDefenitThree = () =>{articleThree.style.opacity = '0';}


projectThree.addEventListener('mouseover', addDefinitThree);
projectThree.addEventListener('mouseout', deleteDefenitThree);
//next code is work for projectThree area finish



// //next code do not work
// let addDefinit = function(place){place.style.opacity = '1';}
// let deleteDefenit = function(place){place.style.opacity = '0';}


// projectOne.addEventListener('mouseover', addDefinit(article));
// projectOne.addEventListener('mouseout', deleteDefenit(article));
// //next code do not work finish


//try#2 do not work
// let addDescr = function(){
// 	if(projectOne.addEventListener('mouseover')){
// 		article.style.opacity = '1';
// 	}else{
// 		article.style.opacity = '0';
// 	}
// }

console.log('You are at '+window.location);



let background = prompt('Какой будет фон у страницы?(yellow, blue. grey etc.')
let body = document.body
body.style['background-color'] = background

let color = prompt('Каким цветом хочешь видеть текст на странице?')
let pageclass = document.querySelector('.page')

pageclass.style['color'] = color


let inspirename = prompt('Как зовут человека, который вас вдохновляет')
let name = document.querySelector('span')
name.innerHTML = inspirename

let inspirephoto = prompt('Найдите в гугле его лучшее фото и вставьте ссылку на это фото')
let picture = document.querySelector('img');
picture.setAttribute ('src', inspirephoto)



let describe = prompt('Расскажите нам почему вы вдохновляетесь в нескольких предложениях')
let shortbio = document.querySelector('.shortBio')
shortbio.innerHTML = describe
shortbio.className += ' animated';

// Допишем границы
// if (background = 'white'){
// 	shortbio.style.border = '.1em solid black';
// }else{
// 	shortbio.style.border = '.1em solid white';
// }
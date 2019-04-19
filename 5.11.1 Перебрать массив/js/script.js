console.log('You are at '+window.location);

let names = [
[
['куры', 'гуси', 'павлины'],
['сокол', 'орел', 'соловей']
],
[
['собака', 'кошка'],
['обезьяна', 'рысь']
]
];


// for(let i = 0; i<names[0][0].length+names[0][1].length+names[1][0].length+names[1][1].length, i++){

// }

for(let i = 0; i<(names[0].length+names[1].length); i++){
	for(key of names[0][i]){
		console.log(key);
	}
	for(key of names[1][i]){
		console.log(key);
	}
}


// for(let i = 0; i<(names.length); i++){
// 	for(key of names[0][i]){
// 		console.log(key);
// 	}
// 	for(key of names[1][i]){
// 		console.log(key);
// 	}
// }



//sample below works
// let first = names[0];
// let second = names[1];

// for(key of first){
// 	console.log(key);
// }
// for(key in second){
// 	console.log(second[key]);
// }
//sample above works

// for(key of names[0]){
// 	console.log(key);
// }
// for(key in names[1]){
// 	console.log(names[1][key]);
// }

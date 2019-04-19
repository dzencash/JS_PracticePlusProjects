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

//  let first = names[0];
//  let second = names[1];

// for(key of names[0]){
// 	console.log(key)
// }

//sample below works
// for(key of first){
// 	console.log(key);
// }
// for(key in second){
// 	console.log(second[key]);
// }
//sample above works

for(key of names[0]){
	console.log(key);
}
for(key in names[1]){
	console.log(names[1][key]);
}

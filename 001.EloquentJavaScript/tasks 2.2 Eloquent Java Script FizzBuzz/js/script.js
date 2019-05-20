

// for(let i = 1; i<=100; i++){
// 	let fizz = i%3;
// 	let buzz = i%5;
	
// 	if(fizz==0&&buzz==0){
// 		console.log('FizzBuzz')
// 	}else if(fizz==0){
// 		console.log('Fizz')
// 	}else if(buzz==0){
// 		console.log('Buzz')
// 	}else{
// 		console.log(i);
// 	}
// }


// https://eloquentjavascript.net/code/#2.2

for (let n = 1; n<=100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += "Buzz";
	console.log(output || n);
}

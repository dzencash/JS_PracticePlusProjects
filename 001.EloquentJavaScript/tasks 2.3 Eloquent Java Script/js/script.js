

// let count = 5;
// let line = '# # # #';
// let position = ' # # # #';

// for(let i = 0; i<=count; i++){
// 	if(i%2==0){
// 		console.log(position);
// 	}else{
// 	console.log(line);
// 	}
// }

// let position = ' ';
// let sign = '#';
// let line = sign+position;

// for(let y = 0; y<2; y++){
// 	for(let i = 0; i<=1; i++){
// 		line = line+line;
// 	}
// 	if(line.lenght=4){
// 		console.log(line+='\n')
// 	}
// }

// let position = ' ';
// let sign = '#';
// let line = sign+position;

// for(;sign.length<4;){
// 	sign = sign+position+sign;
// }
// 	console.log (sign+'\n');

// var line = '';
// var symbol = '# ';
// var empt = '';

// for(let i = 0; line.length<=32; i++){
// 	line += symbol;
// 	if(line.length%8==0||line.length%8==1){
// 		line+='\n'+symbol
// 	}
// }

// console.log(line);

let line = ' ';
let symbol = '#';

for(let i = 0; i<4; i++){
	for(let i = 0; line.length<=4; i++){
		symbol+=line;
		// line += line;
	}
	symbol+='\n';
}
console.log(symbol);
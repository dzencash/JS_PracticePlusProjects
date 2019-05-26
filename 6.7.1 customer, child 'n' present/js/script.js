class Customer {
	constructor(name){
		this.name = name;
	}
	buy(){
		return 'Куплено!'
	}
}
let newCustomer = new Customer('Danila')

console.log(newCustomer);
console.log(newCustomer.buy());

class childCustomer extends Customer{
	getPresent(){
		return 'Шарик в подарок!';
	}
}

let newChildCustomer = new childCustomer ('Marina');
console.log(newChildCustomer);

console.log(newChildCustomer.getPresent())
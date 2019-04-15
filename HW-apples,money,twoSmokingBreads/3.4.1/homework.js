let money = prompt('Сколько денег у вас с собой?')
let apple = prompt('Сколько вы купили яблок?')
let bread = prompt('Сколько вы купили батонов хлеба?')
let priceofapple = prompt('Сколько стоит одно яблоко?')
let priceofbread = prompt('Сколько стоит один батон хлеба?')
let amountofbread = Number(bread)
let amountofapple = Number(apple)
let moneyofbread = Number(priceofbread)
let moneyofapple = Number(priceofapple)
let totalpricebread = moneyofbread*amountofbread 
let totalpriceapple = moneyofapple*amountofapple 
let answer = money >= (totalpricebread+totalpriceapple)
document.write(answer)
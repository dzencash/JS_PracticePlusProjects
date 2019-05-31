window.onload = ()=>{
	console.log('Completed window loading!')


class Person{
	constructor(name){
		this.name = name;
		this.happiness = 0;
	} 
	hasCat(){
		return (this.happiness++);
	}
	hasRest(){
		return (this.happiness++);
	}
	hasMoney(){
		return (this.happiness++);
	}
	isSunny(){
		const APIKey = '8e40478898eb0fcc5bb92a0f00ae7c3d';
		var city = 'Moscow';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		if(xhr.status !=200){
			console.log(xhr.status + ' '+ xhr.statusText);	
		}else{
			var DATA = JSON.parse(xhr.responseText);
		}
		var temp = parseInt(DATA.main.temp-273);
		if(temp>15){return this.happiness++}
		else{return this.happiness}
	}

}
// api
	document.forms[0][7].onclick = (e)=>{ 
		e.preventDefault();
		var Cat = document.forms[0][1].checked;
		var Rest = document.forms[0][3].checked;
		var Money = document.forms[0][5].checked;
		var namePerson = document.forms[0][0].value;
		var newPerson = new Person (namePerson);

		if(Cat == true) newPerson.hasCat();
		if(Rest == true) newPerson.hasMoney();
		if(Money == true) newPerson.hasRest();	
		newPerson.isSunny();
		console.log(newPerson)

		document.querySelector('.personName').innerHTML = newPerson.name+' :';

		if(newPerson.happiness==4){
		document.querySelector('.icon').innerHTML = '😁'	;
		}else if(newPerson.happiness==3){
		document.querySelector('.icon').innerHTML = '😐';
		}else {document.querySelector('.icon').innerHTML = '☹️';}
	}
}


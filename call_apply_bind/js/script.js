// Через call и apply функция понимает с каким именно объектом ей нужно работать, потому что синтаксис object.function() - это вызов внутреннего метода объекта, а нам нужно применит стороннюю функцию и воззвать к this объекта, именно поэтому используем синтаксис function.call(object) или apply вместо call. Через запятую можно передавать аргумент 
// function.call(object, 'arg')
// function.apply(object, [arg])

const Stas = {
	name: 'Stason',
	age: 32,
}

const Nika = {
	name: 'Nikos',
	age: 28,
}

const Ai = {
	name: 'AI',
	age: 30000,
}

function about(arg = '') {
	document.querySelector('.out').innerHTML = 
	`My name is ${this.name},
	I am ${this.age} ears old! ${arg}
	`
}

const btns = document.querySelectorAll('button');
btns.forEach(e => e.addEventListener('click', e => {
	
	if (e.target.innerHTML === 'Stas') {
		about.call(Stas, ' i am a superman')
	} else if (e.target.innerHTML === 'Nika'){
		about.apply(Nika, ['i am a supergirl'])
	} else if (e.target.innerHTML === 'Ai') {
		about.apply(Ai)
	}
}
))



//== закрепляем

const obj = {
	name: 'stas',
	sayHi(){
		console.log('Hi ' + this.name)
	}
}



function sayHi(){
	console.log('Hello ' + this.name)
}

obj.sayHi()
sayHi.call(obj)
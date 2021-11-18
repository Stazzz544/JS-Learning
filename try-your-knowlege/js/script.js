






function logPerson(){
	console.log(`Person: ${this.name} age: ${this.age}`)
}


function bind(context, fn){
	return function(...args){
		fn.apply(context, args)
	}
}

const person1 = {name: 'stas', age: 22}

bind(person1, logPerson)()
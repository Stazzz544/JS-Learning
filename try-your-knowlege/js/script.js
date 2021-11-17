const human = {
	sayName(){
		console.log(`my name is ${this.name}`)
	},
	sayAge(){
		console.log(`i am ${this.age} years old`)
	}
}

stas = Object.create(human)
stas.name = 'stas',
stas.age = 32

Object.prototype.hello = function(){
	console.log('hello')
}

const shura = new Object({
	name: 'shuraaaaaa'
})
"use stric"
const person1 = {
	name: 'stas',
	age: 32,
	sayHi(){
		console.log('hello ' + this.name )
	}
}

//Любые вещи которые создаются в js - это объекты
//Перепшем функцию создания объекта

const person2 = new Object({
	name: 'nika',
	age: 28,
	sayHi(){
		console.log('hello ' + this.name )
	}
})

//помимо описаных выше свойств объекта person1 и person2 к ним также залетают свойства самого главнго класса в js - object. Найти из можно в proto

Object.prototype.sayHello = function() {
	console.log(this.name + ' hello')
}


//Object есть метод create с помощью которого мы создаём новые объекты
//внутрь create можно переать то, что будет являтся прототипом нового объекта

const pasha = {//подительский объект
	name :'pasha',
	age : 22,
	hi(){
		console.log('hi ' + this.name)
	}
}

const lena = Object.create(pasha)
lena.name = 'lena'

//лена наследует всё от паши, кроме name, так как его мы добавляем в сам объект лена. а всё что он паши - находится в prototype


console.log(lena.__proto__.name)

//Поиск полей или функций идёт сверху вниз(в глубину)

//Доказательтво что всё - это объекты
//Обычно строка создаётся так:
//const str = 'i am a string'
//Но закулисами пишется так:

const str = new String('i am a string')
str.func = function(){console.log(this
	)}

str.func()//String {'i am a string', func: ƒ}

//!!!!!Object - является самым главным классом в JS, поэтому у строки можно вытащить метод, который мы добавляли к объету глобальному объекту: Object.prototype.sayHello!!!!!
Object.prototype.stringFunk = function(arg){
	console.log(arg + ' Hello string! ' + this)
}

str.stringFunk('argument')
//argument Hello string! i am a string 
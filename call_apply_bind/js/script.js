function  hello() {
	console.log('hello', this)
}
function  hello1() {
	console.log('hello', this)
}
//первой трочкой получим hello, аторой window - глобальный объект

const person = {
	name: 'stas',
	age: 25,
	sayHello: hello, // при вызове получим сам объект person (см ф-цию выше)
	sayHelloWindow: hello1.bind(window),
	//sayHelloWindow: hello1.bind(this) - можно даже так, потому что чистый this === window
	//sayHelloWindow: hello1.bind(document) - получим объект document
	logInfo: function(arg='nothing'){
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
		console.log(arg)
		console.groupEnd()
	}
}


const lena = {
	name: 'Elena',
	age: 23
}

person.logInfo.bind(lena, 'bind')() //принимает параметры через запятую,  требуется дополнительно вызвать ()
person.logInfo.call(lena, 'call') //принимает параметры через запятую, не требует вызова
person.logInfo.apply(lena, ['apply']) //принимает параметры в массиве, не требует вызова

//Другой способ передать параметры в bind:
const newFuncForBind = person.logInfo.bind(lena)
newFuncForBind('someText')//сначала присваеваем, а при вызове ередаём параметры

//Prototype и context(Универсальная умножалка зашитая в прототайп глобального объекта)
const arr = [1, 5, 3, 7]

Array.prototype.multBy = function(n){
	return this.map(function(e){
		return e * n
	})
}

console.log(arr.multBy(3))

//встроенные методы для определения контекста
//bind - привязывает контекст к объекту (ставит объект в скобках слева от this), в нашем случает= объект window
// Классический способ создания объекта
// const animal = {
// 	name: 'animal',
// 	age: 5,
// 	hasTail: true,
// }


//Более удобный способ
//Классы всегда пишем с большой буквы
class Animal {

	static type = 'ANIMAL' //статический метод. При обращении доступен только у класса. у наследников этого метода не будет

	constructor(options){
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
	}

	voice() { // метод доступен всем наследникам
		console.log(`I am the Animal`)
	}
}

const animal = new Animal({//В этом случае наш объект является наседником класса Animal
	name: 'Animal',
	age: 5,
	hasTail: true
})
//При просмотре объекта в браузере - в прототипе мы увидем сначала class Animal, а уже уровнем ниже Object


//Наследование класса от класса
class Cat extends Animal {
	static type = 'CAT' // обращение через класс - Cat.type

	//Если в этом ка
	constructor(options) {
		super(options)//ключевое слово, чтобы вызвать родительский конструктор
		this.color = options.color
	}

	//можно переписывать родительские методы
	voice() {
		super.voice()// это вызовит одноимённый метод у родителя вместе с тем, что мы перезаписали
		console.log('i am cat')
	}
	//геттер у объекта(что-то возвращает)
	get ageInfo() {
		return this.age * 7//конвертируем возраст животного в человеческие года
	}
	//seter у объекта, что-то устанавливает
	set ageInfo(newAge) {
		this.age = newAge// установит новый возраст
	}

}

const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true,
	color: 'white',
	eye: 'green',//не запишется. Не в конструкторе Animal, от которого наследуется конструктор Cat
})

//Если мы добавим свойство, которого нет, например цвет глаз - то оно не появится в объекте, так как его нет в конструкторе класса
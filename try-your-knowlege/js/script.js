class Animal{
	constructor(options)
	{
		this.name = options.name;
		this.age = options.age;
	}
	voice(){
		console.log('I am the animal')
	}
}

class Dog extends Animal{
	constructor(options)
	{
		super(options)
		this.color = options.color
	}
	voice(){
		console.log('gav gav')
	}
}


const cat = new Animal({
	name: 'cat',
	age: 6,
	color: 'black',
})

const dog = new Dog({
	name: 'Bob',
	age: 12,
	color: 'white'
})

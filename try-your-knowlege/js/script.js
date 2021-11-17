
Object.prototype.logInfo = function(profession){
	console.group(`Log info ${this.name}`)
	console.log(`name: ${this.name}`)
	console.log(`age: ${this.age}`)
	console.log(`profession: ${profession}`)
	console.groupEnd()
}

const nika ={
	name: 'Nika',
	age: 28
}

const person = {
	name: 'Stas',
	age: 32,
}

nika.logInfo = person.logInfo
//nika.logInfo('manager')
//person.logInfo('kladovchik')

const arr = [1, 5, 7]

Array.prototype.mult = function(n){ return this.map(e => e*n)}

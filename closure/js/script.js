//Замыкание это функция внутри другой функции


function createCulcFunction(n) {
	return function() {
		console.log(1000 * n)
	}
}

createCulcFunction(42)// при таком вызове ничего не увидим так как вернётся просто функция(вторая)

const calc = createCulcFunction(42)//в этом месте произошло замыкание 42(n) из верхей функции в нижнюю
calc()//теперь можно вызывть  calc, а это и есть внутренняя функция, без мараметров, так как теперь там замкнута 42(n)

//===============
function createIncrementor(n){
	return function(num){
		return n + num
	}
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)
console.log(addOne(10))  //11
console.log(addOne(41))  //42
console.log(addTen(10))  //20
console.log(addTen(41))  //51
//Функция addOne замкнула в себе единицу и постоянно ее прибавляет
//Функция addTen замкнула в себе ltcznre и постоянно ее прибавляет

//Более жизненный пример с генерацией url адреса

function urlGenerator(domain){
	return function(url){
		return `https://${url}.${domain}`
	}
}

const comUrl = urlGenerator('com')
console.log(comUrl('google'))//https://google.com
console.log(comUrl('amazon'))//https://amazon.com

const ruUrl = urlGenerator('ru')
console.log(ruUrl('yandex'))//https://yandex.ru
console.log(ruUrl('sberbank'))//https://sberbank.ru



//задача от Владилена

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'};
const person2 = {name: 'Елена', age: 19, job: 'SMM'};


function logPersons(){
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(context, fn){
	return function(...arg){
		fn.apply(context, arg)
	}
}

bind(person1, logPersons)() //Person: Михаил, 22, Frontend
bind(person2, logPersons)() //Person: Елена, 19, SMM

//===

//push - добавляет эл-ты в конец массива. Можно пушить несколько элементов
const arr = [5, 'dd', true, 1];
const newVar = arr.push('new', 333)
console.log('arr: ', arr)// arr:  [ 5, 'dd', true, 1, 'new', 333 ]
console.log('newVar: ', newVar)// возвращаетновую длину массива - 6

//unshift - добавляет эл-ты в начало массива. Можно закидывать несколько элементов
const arr = [5, 'dd', true, 1];
const newVar = arr.unshift('new', 333)
console.log('arr: ', arr)// arr:  [ 'new', 333 б 5, 'dd', true, 1]
console.log('newVar: ', newVar)// возвращаетновую длину массива - 6

//pop - удаляет последний элемент массива
const arr = [5, 'dd', true, 1];
const newVar = arr.pop()
console.log('arr: ', arr)// arr:  [ 5, 'dd', true]
console.log('newVar: ', newVar)// возвращает удаленный элемент (1)

//shift - удаляет первый элемент массива
const arr = [5, 'dd', true, 1];
const newVar = arr.shift()
console.log('arr: ', arr)// arr:  ['dd', true, 1]
console.log('newVar: ', newVar)// возвращает удаленный элемент (5)

//includes - проверяет массив на наличие элемента, возвратит true / false (сравнение строгое ===)
const arr = [5, 'dd', true, 1];
const newVar = arr.includes('dd')
console.log('arr: ', arr)// arr:  ['dd', true, 1]
console.log('newVar: ', newVar)// true

//find - проверяет массив на наличие элемента, возвратит true / false (сравнение строгое ===)
const arr = [5, 'dd', true, 1];//если true - вернет первый true-элемент, если false - то undefined
const newVar = arr.find(e => e ==='dd')
console.log('arr: ', arr)// arr:  ['dd', true, 1]
console.log('newVar: ', newVar)// 'dd'

//findIndex - проверяет массив на наличие элемента, возвратит индекс элемента
const arr = [5, 'dd', true, 'dd', 1];//если true - вернет индекс первого true-элемента, если false - то -1
const newVar = arr.findIndex(e => e ==='ddс')
console.log('arr: ', arr)// arr:  ['dd', true, 1]
console.log('newVar: ', newVar)// '-1'

//concat - объединяет 2 и более масивов + можно докидать элементов
const arr1 = [15, 'dd',];
const arr2 = [true, false];
const newVar = arr1.concat(arr2, 'newElem')
console.log('arr1: ', arr1)// arr1:  [ 15, 'dd' ]
console.log('arr2: ', arr2)// arr2:  [ true, false ]
console.log('newVar: ', newVar)// newVar:  [ 15, 'dd', true, false, 'newElem' ]

//reverse разворачивает массив и возвращает на него ссылку
const arr = [1, 21, 2, 7, 33];//
const newVar = arr.reverse()//
console.log('arr: ', arr)// [ 33, 7, 2, 21, 1 ]
console.log('newVar: ', newVar)// [ 33, 7, 2, 21, 1 ]

//slice - копирует часть массива
const arr = [5, 'dd', true, 'dd', 1];//
const newVar = arr.slice(2,4)//первое значение - с какого  элемента начинать, второе - каким заканчивать(не включая его)
console.log('arr: ', arr)// [ 5, 'dd', true, 'dd', 1 ]
console.log('newVar: ', newVar)// [ 'dd', true ]

//splice - копирует часть массива
const arr = [5, 'dd', true, 'dd', 1];//
const newVar = arr.splice(2, 2,  'newItem1, item2')//первое значение - с какого  элемента начинать, второе - сколько элеменов вырезать и вернуть, третье и далее , что вставить на место вырезанных элементов
console.log('arr: ', arr)//  [ 5, 'dd', 'newItem1, item2', 1 ]
console.log('newVar: ', newVar)// [ 'dd', true ]

//filter - фильтрует значения
const arr = [5, 'dd', true, 'dd', 1];//
const newVar = arr.filter(e => typeof(e) === 'number')//пробегается по массиву, если сравнение true - то копирует значение в новый массив
console.log('arr: ', arr)// [ 5, 'dd', true, 'dd', 1 ]
console.log('newVar: ', newVar)// [ 5, 1 ]

//sort (не подходит для чисел в сыром виде)
const arr = [1, 21, 2, 7, 33];//
const newVar = arr.sort()//возвращает новый масив на основе старого(преобразование или просто возврат)
console.log('arr: ', arr)// [ 1, 2, 21, 33, 7 ]
console.log('newVar: ', newVar)// [ 1, 2, 21, 33, 7 ]

//sort (для чисел, передать колбэк)
const arr = [1, 21, 2, 7, 33];//
const newVar = arr.sort((a, b)=>(a-b))//возвращает новый масив на основе старого(преобразование или просто возврат)
console.log('arr: ', arr)// [ 1, 2, 7, 21, 33 ]
console.log('newVar: ', newVar)// [ 1, 2, 7, 21, 33 ] - ссылка на сортируемый массив

//map
const arr = [1, 2, 3, 4, 5];//
const newVar = arr.map(e => e * 2)//возвращает новый масив на основе старого(преобразование или просто возврат)
console.log('arr: ', arr)// [ 1, 2, 3, 4, 5 ]
console.log('newVar: ', newVar)// [ 2, 4, 6, 8, 10 ]

//Пробегается по массиву и возвращает результирующее значение
const arr = [
	{name: 'john', money: 122},
	{name: 'mila', money: 44},
	{name: 'ken', money: 412},
	{name: 'udon', money: 765},
];//
const newVar = arr.reduce((prev, current)=> {
	return prev + current.money
}, 0)//возвращает новый масив на основе старого(преобразование или просто возврат)

console.log('newVar: ', newVar)// 1343

//split - разобрать строку на массив + сепаратор
const str = 'мама мыла раму'
const arr = str.split(' ')// в скобках сепаратор
console.log('str: ', str)// мама мыла раму
console.log('arr: ', arr)// [ 'мама', 'мыла', 'раму' ]

//join - обрать строку из массива , можно использовать сепаратор иначе элементы будут идти через запятую как в исходном массиве
const arr = [ 'мама', 'мыла', 'раму' ]
const str = arr.join(' ')
console.log('str: ', str)// мама мыла раму
console.log('arr: ', arr)// [ 'мама', 'мыла', 'раму' ]


//delete
const arr = [1, 6, 2]
delete arr[2]
console.log(arr)// [ 1, 6, <1 empty item> ] - осталось занятое пустотой поле

const obj = {
	name: 'stas',
	age: 32,
}
delete obj.name
console.log(obj) //{ age: 32 } - элемент удалился корректно

//isArray - проверяет массив \то или нет
console.log(Array.isArray({}))//false
console.log(Array.isArray([]))//true

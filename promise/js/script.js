const p = new Promise((resolve, reject) => {
	console.log('setTimeout started')
	setTimeout(()=>{
		console.log('SetTimeout ended')
		reject({status: 'not OK'})
	}, 2000)
})

p
	//.then((data) => console.log(data)) // без вложенности
	.then((data) => { // с вложенностью
		return new Promise(()=>{})
	})
	.then((данные)=>...)
	.catch(error => console.error(error)) //вызовется именно это из-за реджекта
	.finally(() => console.log('finally'))


	//ТАК КАК ВСЕ БРАУЗЕРЫ ПОД КАПОТОМ УЖЕ ИМЕЮТ И ИСПОЛЬЗУЮТ ПРОМИСЫ ТО МОЖНО ИСПОЛЬЗОВАТЬ FETCH
	
	fetch('http://..', params)//тут возвращается промис, поэтому можно делать те же ходы что выше
	.then( res => {
		return fetch('http://..', params) 
	})//опять вернулся промис , а значит можем опять пистаь then
	.then()//...
	.catch( )

	//Promise all and Promiss.race

const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			
		}, ms);
	})
}
//Есть 2 кода, которые выполнятся через разное время
//delay(2000).then(() => console.log('After 2000ms'))
//delay(4000)then(() => console.log('After 4000ms'))

//Тут мы собрали 2 кода в массиве промис олл
Promise.all([delay(2000), delay(4000)]).then(() => {
	console.log('After 4000 ms')
})
//противоположность пропис алл, выполнится, когда отработает самый первый промис
Promise.race([delay(2000), delay(4000)]).then(() => {
	console.log('After 2000 ms')
})
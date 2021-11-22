const person = Object.create(
	{}, 
	{
		name: {
			value: 'Stas'
		},
		birthYear: {
			value: 1989
		} 
	}
)

console.log(person)// 'Stas', birthYear: 1989}
//в консоле ключи объекта будут бледного цвета из-за того что поля как-бы присутствуют, но при проведении итерации эти поля не будут входить в цикл

for (key in person){
	console.log(key)// в консоле пустота
}

//чтобы вернуть ключам дефолтное значение нужно использовать параметр enumerable : true (по умолчанию он false)

//ДИСКРИПТЕРЫ: enumerable - делает значения невидимыми


const person1 = Object.create(
	{}, 
	{
		name1: {
			value: 'Stas',
			enumerable: true // увидем в цикле name Stas
		},
		name: {
			value: 'Stas',
			enumerable: true // увидем в цикле name Stas
		},
		birthYear: {
			value: 1989,// не увидим
			enumerable: true,
		},
		birthYeard3: {
			value: 1989,// не увидим
			enumerable: true,
		},
		
	}
)

person1.name = 'Maxim' // поле не перезапишет значение name!!!!
//person1.money = 20000000000;

for (key in person1){
	console.log('key: ', key, person1[key])// в консоле name Stas
}
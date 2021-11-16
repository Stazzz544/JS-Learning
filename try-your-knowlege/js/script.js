const stas = {
	name: 'stas',
	hi(){
		console.log(`hi ${this.name}`)
	}
}

function hello() {
	console.log(`hello ${this.name}`)
}

hello.bind(stas)()
stas.hi()

setTimeout( stas.hi.bind(stas) , 1000);

function a(){
	stas.hi()
}
a()
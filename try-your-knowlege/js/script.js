const url = 'https://jsonplaceholder.typicode.com/posts/1';
async function myFetch(){
 const response = await fetch(url);
 const data = await response.json()
 console.log(data)
 document.querySelector('#out').innerHTML = 
	`
	<h1>${data.title}</h1>
	<p>${data.body}</p>
	`
}

document.querySelector('#btn').onclick = show

async function show(){
	await myFetch()
	
}
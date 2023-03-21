export function sayHello() {
    console.log('hello');
}

const baseUrl = 'https://simple-books-api.glitch.me'

export async function getAllBooks() {
const res = await fetch(`${baseUrl}/books/`,{
    mode:'no-cors'
});
const json = await res.json();
console.log(json);
}

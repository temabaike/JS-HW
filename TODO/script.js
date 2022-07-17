const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
await fetch(BASE_URL)
  .then(response => response.json())
  .then(users => console.log(users))
}
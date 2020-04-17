const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

let time = null;
function handleKeyUp(event) {

  clearTimeout(time);

  time = setTimeout(() => {
    const nome = event.target.value;
    filterUsers(nome).then(users => console.log(users));
  }, 1000)
}

document.querySelector('input').addEventListener('keyup', handleKeyUp);
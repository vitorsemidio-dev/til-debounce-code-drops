const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

  
function debounceEvent(value) {
  let time = null;
  clearTimeout(time);

  time = setTimeout(() => {
    filterUsers(value).then(users => console.log(users));
  }, 1000);
}
function handleKeyUp(event) {
  debounceEvent(event.target.value);  
}

document.querySelector('input').addEventListener('keyup', handleKeyUp);
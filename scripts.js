const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

const debounceEvent = 
  (fn, wait = 1000, time) => 
  (...args) =>
  clearTimeout(
    time,
    time = setTimeout(() => fn(...args), wait)
  );

function handleKeyUp(event) {
  filterUsers(event.target.value)
  .then(users => console.log(users.map(user => user.name)));  
}

const input = document.querySelector('input')
input.addEventListener('keyup', debounceEvent(handleKeyUp, 750));
input.focus();
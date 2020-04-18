const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());


function debounceEvent(fn, wait = 1000, time) {
  return function() {
    clearTimeout(time);
    time = setTimeout(() => {
      // fn(arguments); // passa os arguments
      fn.apply(this, arguments); // aplica os argments direto na função
    }, wait);
  }

}

function handleKeyUp(event) {
  filterUsers(event.target.value)
  .then(users => console.log(users.map(user => user.name)));  
}

const input = document.querySelector('input')
input.addEventListener('keyup', debounceEvent(handleKeyUp, 750));
input.focus();
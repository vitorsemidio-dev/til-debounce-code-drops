const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

  
function debounceEvent() {
  let time = null;
  
  return function(fn, wait = 1000) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn();
    }, wait);
  }

}

const debounce = debounceEvent();

function handleKeyUp(event) {
  debounce(() => {
    filterUsers(event.target.value)
    .then(users => console.log(users.map(user => user.name)));
  }, 3000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp);
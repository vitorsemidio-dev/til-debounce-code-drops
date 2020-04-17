const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

  
function debounceEvent() {
  let time = null;
  
  return function(fn) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn();
    }, 1000);
  }

}

const debounce = debounceEvent();

function handleKeyUp(event) {
  debounce(() => {
    filterUsers(event.target.value)
    .then(users => console.log(users.map(user => user.name)));
  });
}

document.querySelector('input').addEventListener('keyup', handleKeyUp);
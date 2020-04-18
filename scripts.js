const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());


function debounceEvent(fn, time) {
  console.log('run debounce');
  return function(wait = 1000) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn();
    }, wait);
  }

}

// const debounce = debounceEvent();

function handleKeyUp(event) {
  // console.log('run');
  // filterUsers(event.target.value)
  // .then(users => console.log(users.map(user => user.name)));  
}

document.querySelector('input').addEventListener('keyup', debounceEvent(handleKeyUp));
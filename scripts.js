const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());


function debounceEvent(fn, wait = 1000, time) {
  console.log('run debounce');
  return function() {
    console.log('digitei');
    console.log(wait);
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

const input = document.querySelector('input')
input.addEventListener('keyup', debounceEvent(handleKeyUp, 3000));
input.focus();
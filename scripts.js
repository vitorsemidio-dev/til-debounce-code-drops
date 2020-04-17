const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users';

const filterUsers = async (name) => 
  fetch(`${jsonplaceholder}?name_like=${name}`).then(res => res.json());

  
function debounceEvent() {
  let time = null;
  
  // clojure
  return function(value) {
    clearTimeout(time);
    time = setTimeout(() => {
      filterUsers(value).then(users => console.log(users.map(user => user.name)));
    }, 1000);
  }

}

const debounce = debounceEvent(); // clojure

function handleKeyUp(event) {
  debounce(event.target.value); // chamando a função
}

document.querySelector('input').addEventListener('keyup', handleKeyUp);
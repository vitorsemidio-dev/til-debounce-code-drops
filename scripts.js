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
  .then(users => {
    const usersName = users.map(user => user.name);
    cleanList();
    usersName.forEach(addUserNameToList);
  });
}

function addUserNameToList(userName) {
  const listItem = createListItem(userName);
  list.append(listItem);
}

function createListItem(userName) {
  const li = document.createElement('li');
  li.innerText = userName;
  li.className = 'list-item';
  return li;
}

function cleanList() {
  list.innerHTML = '';
}

const input = document.querySelector('input')
const list = document.getElementById('list');
input.addEventListener('keyup', debounceEvent(handleKeyUp, 750));
input.focus();

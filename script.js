const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const listChilds = list.children;
function addTask() {
  const createLi = document.createElement('li');
  const inputValue = inputTask.value;
  createLi.innerHTML = inputValue;
  list.appendChild(createLi);
  inputTask.value = '';
  console.log(listChilds.length);

  // Add color
  for (let i = 0; i < listChilds.length; i += 1) {
    listChilds[i].addEventListener('click', (li) => {
      const event = li.target;
      event.style.backgroundColor = 'gray';
    });
  }
}
buttonAdd.addEventListener('click', addTask);
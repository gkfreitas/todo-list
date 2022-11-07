const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
function addTask() {
  const createLi = document.createElement('li');
  const inputValue = inputTask.value;
  createLi.innerHTML = inputValue;
  list.appendChild(createLi);
  inputTask.value = '';
};
buttonAdd.addEventListener('click', addTask);
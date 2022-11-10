const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const listChilds = list.childNodes;

// Add color
function selectTask(task) {
  const taskClick = task.target;
  for (let i = 0; i < listChilds.length; i += 1) {
    listChilds[i].style = 'white';
  }
  taskClick.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Double click risk

function finishTask(task) {
  const taskClick = task.target;
  console.log(taskClick.className);
  taskClick.classList.toggle('completed');
}

// Adicionar Tarefa

function addTask() {
  const createLi = document.createElement('li');
  const inputValue = inputTask.value;
  createLi.innerHTML = inputValue;
  list.appendChild(createLi);
  inputTask.value = '';
  console.log(listChilds.length);
  createLi.addEventListener('click', selectTask);
  createLi.addEventListener('dblclick', finishTask);
}
buttonAdd.addEventListener('click', addTask);

// Remover itens da lista
const clearButton = document.getElementById('apaga-tudo');
function removeAllItems() {
  console.log(listChilds);
  list.innerHTML = '';
}

clearButton.addEventListener('click', removeAllItems)
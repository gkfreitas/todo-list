const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const listChilds = list.childNodes;
// Adicionar Tarefa
function addTask() {
  const createLi = document.createElement('li');
  const inputValue = inputTask.value;
  createLi.innerHTML = inputValue;
  list.appendChild(createLi);
  inputTask.value = '';
  console.log(listChilds.length);

  // Add color
  function selectTask(task) {
    const taskClick = task.target;
    for (let i = 0; i < listChilds.length; i += 1) {
      listChilds[i].style = 'white';
    }
    taskClick.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  for (let i = 0; i < listChilds.length; i += 1) {
    listChilds[i].addEventListener('click', selectTask);
  }
}

buttonAdd.addEventListener('click', addTask);

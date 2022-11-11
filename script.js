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

clearButton.addEventListener('click', removeAllItems);

// Remover itens finalizados da lista
const clearFinishButton = document.getElementById('remover-finalizados');
function removeFinishItems() {
  let count = 0;
  for (let i = 0; i < listChilds.length; i += 1) {
    if (listChilds[i].className === 'completed') {
      count += 1;
      listChilds[i].remove();
      for (let i2 = 1; i2 <= count; i2 += 1) {
        removeFinishItems();
      }
    }
  }
}

clearFinishButton.addEventListener('click', removeFinishItems);

// // Mover para cima ou para baixo item selecionado.

// const buttonMoveUp = document.getElementById('mover-cima');
// const buttonMoveDown = document.getElementById('mover-baixo');

// // Para cima

// function moveUp() {
//   for (let i = 0; i < listChilds.length; i += 1) {
//     if (listChilds[i].style.backgroundColor === 'rgb(128, 128, 128)') {
//       const text = listChilds[i].innerHTML;
//       const text2 = listChilds[i - 1].innerHTML;
//       const pastChild = listChilds[i - 1];
//       pastChild.innerHTML = text;
//       listChilds[i].innerHTML = text2;
//       pastChild.style.backgroundColor = 'rgb(128, 128, 128)';
//       listChilds[i].style.backgroundColor = 'white';
//     }
//     if (listChilds[i].innerHTML === 'undefined') {
//       console.log('oi');
//     }
//   }
// }
// buttonMoveUp.addEventListener('click', moveUp);

// function moveDown() {
//   for (let i = 0; i < listChilds.length; i += 1) {
//     if (listChilds[i].style.backgroundColor === 'rgb(128, 128, 128)') {
//       const text = listChilds[i].innerHTML;
//       const text2 = listChilds[i + 1].innerHTML;
//       const nextChild = listChilds[i + 1];
//       nextChild.innerHTML = text;
//       listChilds[i].innerHTML = text2;
//       nextChild.style.backgroundColor = 'rgb(128, 128, 128)';
//       listChilds[i].style.backgroundColor = 'white';
//     }
//   }
// }

// buttonMoveDown.addEventListener('click', moveDown);

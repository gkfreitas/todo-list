const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const listChilds = list.children;
// Add color
function selectTask(task) {
  const taskClick = task.target;
  for (let i = 0; i < listChilds.length; i += 1) {
    listChilds[i].classList.remove('gray');
  }
  taskClick.classList.add('gray');
}

// Double click risk

function finishTask(task) {
  const taskClick = task.target;
  console.log(taskClick.className);
  taskClick.classList.toggle('completed');
}

// Adicionar Tarefa(value)

function addTaskValue(value) {
  for (let i = 0; i < value; i += 1) {
    const createLi = document.createElement('li');
    list.appendChild(createLi);
  }
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
    if (listChilds[i].classList.contains('completed')) {
      count += 1;
      listChilds[i].remove();
      for (let i2 = 1; i2 <= count; i2 += 1) {
        removeFinishItems();
      }
    }
  }
}

clearFinishButton.addEventListener('click', removeFinishItems);

// Salvar lista de tarefas
const buttonSave = document.getElementById('salvar-tarefas');
function saveTask() {
  const objSave = {};
  const objSaveStyleClass = {};
  if (listChilds.length === 0) {
    localStorage.removeItem('SaveTask');
  }
  for (let i = 0; i < listChilds.length; i += 1) {
    const keyObj = `task${i}`;
    const keyObj1 = `backgroundColor${i}`;
    const keyObj2 = `class${i}`;
    objSave[keyObj] = listChilds[i].innerHTML;
    objSaveStyleClass[keyObj1] = listChilds[i].style.backgroundColor;
    objSaveStyleClass[keyObj2] = listChilds[i].className;
    localStorage.setItem('SaveTask', JSON.stringify(objSave));
    localStorage.setItem('SaveStyleClass', JSON.stringify(objSaveStyleClass));
  }
}
buttonSave.addEventListener('click', saveTask);

// // Mover para cima ou para baixo item selecionado.

const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');

// // Para cima

function moveUp() {
  for (let i = 0; i < listChilds.length; i += 1) {
    if (listChilds[i].classList.contains('gray')) {
      let negative = i - 1;
      if (negative < 0) {
        negative = 0;
      }
      const text = listChilds[i].innerHTML;
      const text2 = listChilds[negative].innerHTML;
      const pastChild = listChilds[negative];
      console.log(`pastChild: ${negative}`);
      console.log(`atual: ${i}`);
      pastChild.innerHTML = text;
      listChilds[i].innerHTML = text2;
      pastChild.classList.add('gray');
      listChilds[i].classList.remove('gray');
      if (i === 0) {
        listChilds[0].classList.add('gray');
      }
    }
  }
}
buttonMoveUp.addEventListener('click', moveUp);

function moveDown() {
  for (let i = listChilds.length - 1; i >= 0; i -= 1) {
    if (listChilds[i].classList.contains('gray')) {
      let positive = i + 1;
      if (positive >= listChilds.length) {
        positive = i;
      }
      const text = listChilds[i].innerHTML;
      const text2 = listChilds[positive].innerHTML;
      const nextChild = listChilds[positive];
      console.log(`atual: ${i}`);
      console.log('Next child: ' + positive);
      nextChild.innerHTML = text;
      listChilds[i].innerHTML = text2;
      nextChild.classList.add('gray');
      listChilds[i].classList.remove('gray');
      if (i === listChilds.length - 1) {
        listChilds[i].classList.add('gray');
      }
    }
  }
}

buttonMoveDown.addEventListener('click', moveDown);

// Criar lista salva e adicionar os dados

function createSavedTask() {
  const localTaksParse = JSON.parse(localStorage.getItem('SaveTask'));
  const localStyleClassParse = JSON.parse(localStorage.getItem('SaveStyleClass'));
  if (localTaksParse === null) {
    console.log('Null');
  } else {
    const localTaskLength = Object.keys(localTaksParse).length;
    addTaskValue(localTaskLength);
    for (let i = 0; i < listChilds.length; i += 1) {
      listChilds[i].innerHTML = localTaksParse[`task${i}`];
      listChilds[i].style.backgroundColor = localStyleClassParse[`backgroundColor${i}`];
      listChilds[i].className = localStyleClassParse[`class${i}`];
    }
  }
}

window.onload = () => {
  createSavedTask();
  for (let i = 0; i < listChilds.length; i += 1) {
    listChilds[i].addEventListener('click', selectTask);
    listChilds[i].addEventListener('dblclick', finishTask);
  }
};

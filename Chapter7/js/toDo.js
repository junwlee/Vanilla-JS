const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "toDos";

function savingToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoDelete(event) {
  event.target.parentElement.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newInput = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newInput);
  toDos.push(newInput);
  savingToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
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
  saveToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

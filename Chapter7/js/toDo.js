const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.append(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newInput = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newInput);
}

toDoForm.addEventListener("submit", handleSubmit);

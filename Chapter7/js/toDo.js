const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleSubmit(event) {
  event.preventDefault();
  const newInput = toDoInput.value;
  toDoInput.value = "";
  console.log(newInput);
}

toDoForm.addEventListener("submit", handleSubmit);

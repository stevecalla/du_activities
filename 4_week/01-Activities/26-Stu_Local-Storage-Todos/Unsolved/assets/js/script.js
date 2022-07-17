var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function? //populates the todo list on the screen
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = ""; //resets the content of todoList to blank to eliminate duplicates
  todoCountSpan.textContent = todos.length; //displays the length of the todos array
  
  // TODO: Describe the functionality of the following `for` loop.
  console.log(todos, todos.length)
  for (var i = 0; i < todos.length; i++) { //populates the todos array on the screen
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? //retrieves todos from local storage
function init() {
  // TODO: What is the purpose of the following line of code?
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  console.log(todos)
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code. //stores the todos list in local storage as stringified object
  localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code. //upon clicking the submit button this functoin validates the todo then stores it in local storage then renders the list on the page/screen
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement. //validation: if todoText is blank exit the function (validation)
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.//places the entered todo text in the todos array then resets the todoInput value to blank
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos(); //stores todo in local storage
  renderTodos(); //renders todo list on the screen/page
});

// TODO: Describe the purpose of the following line of code. //listens for a click in the todo list, then deletes the todo if the completed box/button is clickerd
todoList.addEventListener("click", function(event) {
  var element = event.target;
  console.log('click', event.target);
  // TODO: Describe the functionality of the following `if` statement.//if todo list button is clicked, it retrieves the data index then removes the todo from the todos array, stores the array in local storage (w/out the spliced todo then renders the new list)
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
  storeTodos(); //stores todo in local storage
  renderTodos(); //renders todo list on the screen/page
  }
});

init();

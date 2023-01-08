const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector(".todo-form__input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let todos = [];

loadTodos();

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text:todoInput.value,
        id: Date.now()
    }

    todos.push(newTodo);
    updateTodos();

    //html control
    writeTodo(newTodo);
    todoInput.value = "";
}

function writeTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(button);
    li.appendChild(span);

    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    todos = todos.filter((list) => list.id !== parseInt(li.id));
    updateTodos();

    //html
    li.remove();
}


function updateTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function loadTodos() {
    if(localStorage.getItem(TODOS_KEY) != null) {
        todos = JSON.parse(localStorage.getItem(TODOS_KEY));

        //html control
        todos.forEach(writeTodo);
    }
}

todoForm.addEventListener("submit", handleTodoSubmit);
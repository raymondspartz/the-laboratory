// allow functionality of a button
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

//add to the list
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function stored as variable to handle button interactivity
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// call createTaskHandler function
buttonEl.addEventListener("click", createTaskHandler);
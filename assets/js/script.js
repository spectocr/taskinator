var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");

var creatTaskHandler = function() {
    var lisItemEl = document.createElement("li");
    lisItemEl.className = "task-item";
    lisItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(lisItemEl);
}

buttonEl.addEventListener("click", creatTaskHandler);

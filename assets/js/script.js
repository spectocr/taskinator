var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var creatTaskHandler = function(event) { //i don't understand the event being placed here as a parameter, yet it doesn't get called until after.

    event.preventDefault();

    var lisItemEl = document.createElement("li");
    lisItemEl.className = "task-item";
    lisItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(lisItemEl);
};

formEl.addEventListener("submit", creatTaskHandler);

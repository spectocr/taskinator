var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var creatTaskHandler = function(event) { //i don't understand the event being placed here as a parameter, yet it doesn't get called until after.

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //creat list item
    var lisItemEl = document.createElement("li");
    lisItemEl.className = "task-item";

    //creat div to hold task inof and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    lisItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    taskToDoEl.appendChild(lisItemEl);
};

formEl.addEventListener("submit", creatTaskHandler);

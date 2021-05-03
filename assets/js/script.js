var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) { //i don't understand the event being placed here as a parameter, yet it doesn't get called until after.

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to creatTaskEl
    createTaskEl(taskDataObj); // ***** if createTaskEl is after it being called, why isn't there an error? I thoguht you have to define the var/function before you called them?

};

var createTaskEl = function(taskDataObj) {
    //creat list item
    var lisItemEl = document.createElement("li");
    lisItemEl.className = "task-item";

    //creat div to hold task inof and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    lisItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    taskToDoEl.appendChild(lisItemEl);
}

formEl.addEventListener("submit", taskFormHandler);

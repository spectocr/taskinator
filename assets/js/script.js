var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");
var pageContentEl = document.querySelector("#page-content");
var taskIdCounter = 0;

var taskFormHandler = function(event) { //i don't understand the event being placed here as a parameter, yet it doesn't get called until after.

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input vlaues are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("Thou must fill out the task form!");
        return false; //**** What is this return false doing?
    }
    formEl.reset();
    
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

    // add task id as a custom attribute
    lisItemEl.setAttribute("data-task-id", taskIdCounter);

    //creat div to hold task inof and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    lisItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    lisItemEl.appendChild(taskActionsEl);

    //add entire list item to list
    taskToDoEl.appendChild(lisItemEl);

    // increas task counter for next unique id
    taskIdCounter++;
};

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create the delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId)

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(statusSelectEl);
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i =0; i < statusChoices.length; i++) {
        //creat option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;
};

var taskButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;

    // edit button was clicked
    if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        editTask(taskId);
    }
    // delete button was clicked
    else if (event.targetEl.matches(".delete-btn")) {
        //get the element's task id
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
}

var editTask = function(taskId) {

    // get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId +"']");

    //get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    

    var taskType = taskSelected.querySelector("span.task-type").textContent;

    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;
    document.querySelector("#save-task").textContent = "Save Task";
    formEl.setAttribute("data-task-id", taskId);
    
};



formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);

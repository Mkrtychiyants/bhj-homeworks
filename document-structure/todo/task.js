const addTask = document.getElementById("tasks__add");
const taskText = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const taskForm = document.getElementById("tasks__form");
const taskTitle = document.getElementsByClassName("task__title");


taskForm.onsubmit = function (e) {
    e.preventDefault();
}
taskText.onkeydown = function (e) {

    if ((e.code === "Enter")) {
        if (taskText.value) {
            taskList.insertAdjacentHTML("afterBegin", "<div class='task'><div class='task__title'>Сходить в магазин</div><a href='#' class='task__remove'>&times;</a></div>");
            document.getElementsByClassName("task__title").item(0).textContent = taskText.value;
            taskText.value = "";
            const closeButt = document.getElementsByClassName("task__remove").item(0);
            closeButt.onclick = function () {
                this.closest("div.task").remove();
            }
        }
    }
}

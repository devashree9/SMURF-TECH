const taskinput = document.getElementById("taskinput");
const addTaskButton = document.getElementById("addTaskButton");
const tasklist = document.getElementById("tasklist");

function addtask(){
    const tasktext = taskinput.ariaValueMax.trim()
    if(!tasktext) return;
    createtask(tasktext);
    taskinput.value ="";
}
addTaskButton.addEventListener("click", addtask);
taskinput.addEventListener("keydown", event => {
    if(event.key === "Enter") addtask();
});
 

function createtask(tasktext) {
    const tasktext = document.createElement("li");
    taskitem.innerHTML =
    <span>$(tasktext)</span>;
    <button class="deleteBtn">
        <i class="bx bxs-trash"></i>
    </button>;


const deleteButton = taskitem.queryselector(".deleteBtn");
deleteButton.addEventListener("click",() => {
    taskitem.remove();
});
taskitem.appendChild(taskitem);
}
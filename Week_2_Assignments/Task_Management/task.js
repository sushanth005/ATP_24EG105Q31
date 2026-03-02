//Import validator functions
import {validateTitle, validatePriority, validateDueDate} from "./validator.js";
const tasks = [];

//1.Add new Task
function addTask(title, priority, dueDate){
    if(validateTitle(title) == true && validatePriority(priority) == true && validateDueDate(dueDate) == true)
    {
        const task = {
            title: title,
            priority: priority,
            dueDate: dueDate
        }
        tasks.push(task)
        console.log("Task added successfully", task)
    }
    else{
        console.log("Failed to add to the task. check the input values.")
    }
}

//Get all Tasks
function getAllTasks(){
        console.log("All Tasks: ", tasks)
        return tasks
}

//Mark Task as completed
//Find task and mark as completed
function completeTask(taskId){
    console.log("Task completed!", taskId)
}

export {addTask, getAllTasks, completeTask}

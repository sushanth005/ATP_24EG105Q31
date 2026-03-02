//Main Application
//import task functions
import {addTask, getAllTasks, completeTask } from "./task.js"

//Adding tasks

addTask("Sleep", "high", new Date("2026-02-28"))
addTask("Eating", "medium", new Date("2026-12-15"))
addTask("Walking", "low", new Date("2025-10-01"))

//Get all tasks
console.log("All Tasks: ", getAllTasks())

completeTask(1)
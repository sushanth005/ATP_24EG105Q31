//validate task title (not empty, min 3 chars)
function validateTitle(title){
    if(!title || title.length <= 3)
    {
        return "Title required or Title must be atleast 3 characters long"
    }
    else{
        return true
    }
}

//Validate priority (must be low, medium, high)
function validatePriority(priority){
    const validPriorities = ["low", "medium", "high"]
    if(!validPriorities.includes(priority.toLowerCase())){
        return "Priority must be low, medium, or high"
    }
    else{
        return true
    }   
}

//Validate due date (must be a future date)
function validateDueDate(date){
    const today = new Date()
    if(date <= today){
        return "Due date must be a future date"
    }
    else{
        return true
    }
}

export {validateTitle, validatePriority, validateDueDate}
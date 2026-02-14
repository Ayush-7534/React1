import { useState } from "react"

export default function EventToDo(){
    function handleSubmit(e){
        e.preventDefault();          // to stop reload of page
        const input = e.target.task;
        const inputValue = input.value.trim();
        if(inputValue === ""){
            alert("Task can not be empty");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<span>${inputValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);
        
    }

    function handleClickList(e){
        if(e.target.className==="deleteBtn"){
            e.target.parentElement.remove();
        }
    }
    const[task,setTask]  = useState("");
    const[tasks,setTasks]= useState("");

    return(
        <>

        <h1>Event To Do</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Enter Task" value={}/>
            <button type="submit">Add Task</button>
    
        </form>

        <ul id="taskList" onClick={handleClickList} >
            <li></li>
        </ul>

    
        </>
    )
}
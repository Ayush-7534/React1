export default function EventToDo(){
    // function handleClick(name){
    //     alert(`You prssed button ${name}`);
    // }
    function handleSubmit(e){
        e.preventDefault();          // to stop reload of page
        const input = e.target.value;
        const inputValue = input.trim();
        if(inputValue===""){
            alert("Task can not be empty");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = <span>${inputValue}</span>
        
    }

    return(
        <>
        <h1>Event Handling</h1>
        <button onClick={()=>handleClick("Ayush")}>Click Me</button>

        <h1>Event to Do</h1>
        <button onClick={()=>handleClick("Ayush")}>Click Me</button>

        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Add your task here"/>
            <input type="submit">Add Task</input>
    
        </form>

        <ul id="taskList" onClick={handleClickList} >
            <li></li>
        </ul>

    
        </>
    )
}
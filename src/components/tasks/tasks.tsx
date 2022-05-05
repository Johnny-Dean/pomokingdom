import { useEffect, useState } from "react"
import { useGetCharacter } from "../../context/character_provider"
import API from "../../services/api-call"
import './tasks.css'

interface Task {
    _id: string,
    name: string
}

interface Props {
    taskName: string
}

function Task({taskName}: Props){
    return (
        <div className="task-box">
            {taskName}
        </div>
    )
}
function Tasks(){
    let character_tasks = useGetCharacter()?.tasks
    const [task, setTask] = useState("")

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    
    const addTask = (event: any) => {
        event.preventDefault()
        API.postTask(task).then(x => console.log(x))
        console.log("handle add task")
    }

    return(
        <div className="tasks-display">
            {character_tasks?.map((task: string) => <Task taskName={task} />)}
            <div className="v-stack">
                <form>
                    <input onChange={handleTaskInputChange}></input>
                    <button onClick={addTask}>Add</button>
                </form>
            </div>

        </div>
    )
}

export default Tasks
import { useEffect, useState } from "react"
import { useGetCharacter } from "../../context/character_provider"
import API from "../../services/api-call"
import './tasks.css'

export interface Task {
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
    const [tasks, setTasks] = useState<Task[] | undefined>([])
    const [task, setTask] = useState("")

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }
    
    const addTask = (event: any) => {
        event.preventDefault()
        API.postTask(task).then(result =>  {
            const taskAdded = result.data.task;
            setTasks(tasks?.concat(taskAdded))
        })
    }

    useEffect(() => {
        API.getTask().then(res => {
            const tasks: Task[] = res.data.tasks
            setTasks(tasks)
        })
    }, [])

    return(
        <div className="tasks-display">
            {tasks?.map((task: Task) => <Task key={task._id} taskName={task.name} />)}
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
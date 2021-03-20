
import { useState, useEffect } from 'react'



const Tasks = () => {
    const [tasks, setTasks] = useState([])
    
    useEffect(() =>{
       const getTasks = async () => {
           const tasksFromServer = await fetchData()
           setTasks(tasksFromServer)
       }
        getTasks()
    }, [])
    //get Data
    const fetchData = async () => {
        const res = await fetch('http://localhost:8000')
        const data = await res.json()
        return data
    }

    const onClick = () => {
    setTasks([
        ...tasks, {name: "Leonard"}
    ]
    )
    }
    
    return (
        <div>
        <h1 onClick = {onClick}>This is data: </h1>
        {tasks.map((task) => (<h3>{task.name}</h3>))}
            
        </div>
    )
}

export default Tasks

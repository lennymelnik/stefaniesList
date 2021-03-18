
import { useState, useEffect } from 'react'
import Task from './Task';
import Sections from './tasks/Sections';
import NewTask from './tasks/NewTask';


const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [values, setValues] = useState([])

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
    const sendTask = async (task) => {
      const options = {
        method: 'POST',
        body: JSON.stringify( task )  
    
    };
      const res = await fetch('http://localhost:8000')
      const data = await res.json()
      return data
    }

    const submitTask = () => {
      if(document.getElementById('taskName').value && document.getElementById('taskSection').value){
        const newTask = {name: document.getElementById('taskName').value, tag : document.getElementById('taskSection').value,color : document.getElementById('taskColor').value, textColor : document.getElementById('taskTextColor').value}
        setTasks([
          ...tasks, newTask
      ]
      )
      
      }
   
    }

    //Add how much energy a task will reqire as well estimated time
    //If a task is monotonuous, low focus
    //Ask steff about time energy table
    return (
        <div>
        <h1>This is data: </h1>
        <NewTask submitTask={ submitTask }></NewTask>
        <table className="table table-striped">
      <thead>
        <tr >
          <th scope="col">Topic</th>
          <th scope="col">Task</th>
          <th scope="col">Group</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>


        {tasks.map((task) => (<Task task= { task }></Task>))}
        
        </tbody>
        </table>
            
        </div>
    )
}

export default Tasks

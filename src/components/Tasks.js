
import { useState, useEffect } from 'react'
import Task from './tasks/Task';
import Sections from './tasks/Sections';
import NewTask from './tasks/NewTask';


const Tasks = (props) => {
  

    //Add how much energy a task will reqire as well estimated time
    //If a task is monotonuous, low focus
    //Ask steff about time energy table
    return (
        <div>
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


        {props.tasks.map((task) => (<Task task= { task }></Task>))}
        
        </tbody>
        </table>
            
        </div>
    )
}

export default Tasks

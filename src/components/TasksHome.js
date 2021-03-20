
import { useState, useEffect } from 'react'
import Tasks from './Tasks';
import NewTask from './tasks/NewTask';
import SectionsList from './SectionsList';


const Home = () => {
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
    const getLabel = (name) => {
        for(var i = 0;i<sections.length;i++){
            if(sections[i].name == name){
                return sections[i]
                break
            }

        }
      
       }
    const submitTask = () => {
        if(document.getElementById('taskName').value ){
            
            var newTask
            if(document.getElementById('taskSection').value){
                //If there is a label
                const labelName = document.getElementById('taskSection').value
                newTask = {name: document.getElementById('taskName').value, tag : document.getElementById('taskSection').value,backgroundColor : getLabel(labelName).backgroundColor, textColor : getLabel(labelName).textColor}
                

             
            }else{
                console.log("no label")
                newTask = {name: document.getElementById('taskName').value, tag : document.getElementById('taskSection').value,backgroundColor : document.getElementById('taskColor').value, textColor : document.getElementById('taskTextColor').value}

              
            }
          setTasks([
            ...tasks, newTask
        ]
        )
        
        }
     
      }
      const [label, setLabel] = useState([])

      useEffect(() =>{
         const getLabel = async () => {
             const labelsFromServer = await getLabelsServer()
             setSections(labelsFromServer)
         }
          getLabel()
      }, [])
      //get Data
      const getLabelsServer = async () => {
          const res = await fetch('http://localhost:8000/sections')
          const data = await res.json()
          return data
      }
    return (
        <div>
            <NewTask submitTask = { submitTask } sections = { sections }>
            </NewTask>
            <Tasks tasks ={ tasks }></Tasks>
            
        </div>
    )
}

export default Home

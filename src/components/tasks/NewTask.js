import Sections from "./Sections"
import { useState, useEffect } from 'react'

const NewTask = (props) => {
    const [sections, setSections] = useState([])

    useEffect(() =>{
       const getSections = async () => {
           const sectionsFromServer = await fetchData()
           setSections(sectionsFromServer)
       }
        getSections()
    }, [])
    //get Data
    const fetchData = async () => {
        const res = await fetch('http://localhost:8000/sections')
        const data = await res.json()
        return data
    }
    const onChangeSection = () => {
        console.log(document.getElementById('taskSection').value)
        for(var i=0;i<sections.length;i++){
            if(sections[i].name == document.getElementById('taskSection').value)
            document.getElementById("taskColor").value = sections[i].textColor
            document.getElementById("taskTextColor").value = sections[i].backgroundColor


        }

        }
    return (
        <div>
             <input id="taskName"  placeholder="Name"></input>
                <select onChange = { onChangeSection} id="taskSection"  class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <Sections sections = { sections }></Sections>
                </select>



                <label for="taskColor" class="form-label">Color picker</label>
                <input type="color" class="form-control form-control-color" id="taskColor"  title="Choose your color"></input>

                <label for="taskTextColor" class="form-label">Color picker</label>
                <input type="color" class="form-control form-control-color" id="taskTextColor"  title="Choose your color"></input>
          

                <button onClick = { props.submitTask }>Submit</button>
        </div>
    )
}

export default NewTask

import Sections from "./Sections"
import { useState, useEffect } from 'react'

const NewTask = (props) => {
    const sections = props.sections
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
             <label for="taskSection" class="form-label">Topic/Label</label>


                    <input onChange = { onChangeSection} class="form-control" list="datalistOptions" id="taskSection" placeholder="Type to search..."></input>
                    <datalist  id="datalistOptions">
                    <Sections sections = { props.sections }></Sections>
                    </datalist>


                <label for="taskColor" class="form-label">Color picker</label>
                <input type="color" class="form-control form-control-color" id="taskColor"  title="Choose your color"></input>

                <label for="taskTextColor" class="form-label">Color picker</label>
                <input type="color" class="form-control form-control-color" id="taskTextColor"  title="Choose your color"></input>
          

                <button onClick = { props.submitTask }>Submit</button>
        </div>
    )
}

export default NewTask

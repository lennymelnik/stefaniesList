import Labels from "./Labels"
import { useState, useEffect } from 'react'

const NewTask = (props) => {
    const labels = props.labels
    const onChangeLabel = () => {
        console.log(document.getElementById('taskLabel').value)
        for(var i=0;i<labels.length;i++){
            if(labels[i].name == document.getElementById('taskLabel').value)
            document.getElementById("taskBackgroundColor").value = labels[i].backgroundColor
            document.getElementById("taskTextColor").value = labels[i].textColor



        }

        }

   
    return (
        <div className="row g-3">
        <div class="col-auto">
        <label for="taskName" class="form-label">Topic/Label</label>

                    <input id="taskName" className="form-control" placeholder="Name"></input>
        </div>
        <div class="col-auto">
        <label for="taskLabel" class="form-label">Topic/Label</label>

        <input onChange = { onChangeLabel} className="form-control" list="datalistOptions" id="taskLabel" placeholder="Type to search..."></input>
                    <datalist  id="datalistOptions">
                    <Labels labels = { labels }></Labels>
                    </datalist>     
        </div>
        <div class="col-auto">
   


                <label for="taskColor" className="form-label">Background Color</label>
                <input type="color" className="form-control form-control-color" id="taskBackgroundColor"  title="Choose your color"></input>
</div>
<div class="col-auto">

                <label for="taskTextColor" className="form-label">Text Color</label>
                <input type="color" className="form-control form-control-color" id="taskTextColor"  title="Choose your color"></input>
          </div>
      
                <button className="form-control" onClick = { props.submitTask }>Submit</button>

        </div>
    )
}

export default NewTask

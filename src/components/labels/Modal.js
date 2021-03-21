import LabelsList from './LabelsList';


const Modal = (props) => {
    const submitLabel = async () => {
        const newLabel = {name: document.getElementById('labelName').value, backgroundColor : document.getElementById('labelBackgroundColor').value, textColor : document.getElementById('labelTextColor').value}

        props.setLabels([...props.labels, newLabel])
    }
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#labelModal">
  Launch demo modal
</button>


<div class="modal fade" id="labelModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">All Labels</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <ul class="list-group list-group-horizontal">
            {props.labels.map((label) => (<LabelsList label= { label }></LabelsList>))}

</ul>
<NewLabel submitLabel = { submitLabel }></NewLabel>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

const NewLabel = (props) => {
 

   
    return (
        <div className="row g-3">
        <div class="col-auto">
        <label for="taskName" class="form-label">Topic/Label</label>

                    <input id="labelName" className="form-control" placeholder="Name"></input>
        </div>
       
    
        <div class="col-auto">
   


                <label for="taskColor" className="form-label">Background Color</label>
                <input type="color" className="form-control form-control-color" id="labelBackgroundColor"  title="Choose your color"></input>
</div>
<div class="col-auto">

                <label for="taskTextColor" className="form-label">Text Color</label>
                <input type="color" className="form-control form-control-color" id="labelTextColor"  title="Choose your color"></input>
          </div>
      
                <button className="form-control" onClick = { props.submitLabel }>Submit</button>

        </div>
    )
}

export default Modal

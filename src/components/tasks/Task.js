
const Task = (props) => {
    
    return (
        <tr style={{ backgroundColor : props.task.backgroundColor, color : props.task.textColor }}>
    <th scope="row" >1</th>
    <td>{ props.task.name }</td>
    <td>{ props.task.tag }</td>
    <td>{ props.task.due }</td>
  </tr>
   )
}

export default Task



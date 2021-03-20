const Sections = (props) => {
   
    return (

      props.labels.map((label, index) => (<option>{ label.name }</option>))
  

    )
}

export default Sections

const Sections = (props) => {
   
    return (

      props.sections.map((selection, index) => (<option>{ selection.name }</option>))
  

    )
}

export default Sections

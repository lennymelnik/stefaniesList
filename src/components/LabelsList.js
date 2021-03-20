import React from 'react'

const SectionsList = (props) => {
    return (
        <div>
                        <ul class="list-group">

             {props.sections.map((section) => (<Section section={section}></Section>))}
           
             </ul>

        </div>
    )
}
const Section = (props) => {
    return (
            <li class="list-group-item" style={{ backgroundColor : props.section.backgroundColor, color : props.section.textColor }}> { props.section.name} </li>
          
           
      
    )
}

export default SectionsList

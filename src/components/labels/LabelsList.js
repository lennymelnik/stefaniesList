
const LabelsList = (props) => {
    return (
        <div>
              <button class="list-group-item" style={{ bordeColor : props.label.backgroundColor, color : props.label.textColor }}>{ props.label.name }</button>

        </div>
    )
}

export default LabelsList


const Buttons = ({button_text, reqType, setreqType}) => {
  return (
    <button className= {button_text === reqType? "Selected": null} 
        type='button'
        onClick={() => setreqType(button_text)}
    >
        {button_text}

    </button>

  )
}

export default Buttons
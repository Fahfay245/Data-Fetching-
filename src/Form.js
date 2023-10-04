
import Buttons from './Buttons'
const Form = ({reqType, setreqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Buttons 
            button_text = "users"
            reqType = {reqType}
            setreqType = {setreqType}
        />
        <Buttons
            button_text = "posts"
            reqType = {reqType}
            setreqType = {setreqType}
        />
        <Buttons
            button_text = "comments"
            reqType = {reqType}
            setreqType = {setreqType}
        />
    </form>
  )
}

export default Form
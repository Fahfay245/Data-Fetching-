import Form from './Form'
import List from './List'
import { useEffect,useState } from 'react';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/"

  const [reqType, setreqType]= useState('users')
  const [item, setitem] = useState([])

  const [fetcherr, setfetcherr] = useState(null)
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchdata = async() => {
      try{
        const response = await fetch(`${API_URL}${reqType}`)
        const item = await response.json()
        setitem(item)
      }
      catch(err){
        setfetcherr(err.message)
      }
      finally{
        setLoading(false)
      }
    }
    setTimeout(()=>{
      fetchdata()
    }, 500)
    
  },[reqType])

  console.log(item);

  return (
    <div className="App">

        <Form 
          reqType = {reqType}
          setreqType = {setreqType}
        />

        {fetcherr && <p>{`Error: ${fetcherr}`}</p>}
        {Loading && <p>Loading Data...</p>}
        {!fetcherr && !Loading &&
          <List
             item = {item}
          />
        }
     
    </div>

  );
}

export default App;

import React,{useState,useEffect} from 'react'
import axios from "axios"

function Demo() {

    const[name,setName] = useState([])
    

    const handlesubmit = (e) => {
        console.log(name);
        e.preventDefault();

        axios
          .post('http://localhost:5000/add',{name : name},
          
         )
          .then(() => 
          console.log('data Created'))
          .catch(err => {
            console.error(err);
          });
    };

    
   
    useEffect(() => {
        fetch('/get')
          .then((response) => response.json())
          .then((data) => console.log(data));
      }, []);



    return (
        <>
           <form method="post" onSubmit={handlesubmit} >
                <input type="text" name="name" onChange={(event) => {setName(event.target.value);}} />
                <button  class="main_bt" type="submit">Send</button>
           </form>

        {/* {state.message} */}
              
        </>
    )
}

export default Demo

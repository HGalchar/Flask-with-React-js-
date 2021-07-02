
import React,{useState,useEffect} from 'react'

function Fetchdata() {

    const [state, setstate] = useState([])

    useEffect(() => {
        loadData();
      }, []);
    
    
     const loadData =  () => {
        fetch('http://192.168.0.110:5000')
            .then(res => res.json())
            .then((data) => {console.log(data);
            setstate(data)
            })
            .catch(console.log)
  
      }
    

    return (
        <>
            {state.map((d) => {
                    return (
                       
                           <>
                            <h3>{d.name}</h3>
                           </>
                        
                    );
                  })}   
        </>
    )
}

export default Fetchdata

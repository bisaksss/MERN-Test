import React,{useState} from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0);


    function increament(){
        setNumber(
            number=number+1
        )
    }

    return(
        <div>
            
            <h1>Counter from Function component= {number}</h1>
            <button onClick={increament}>Increament</button>

        </div>
    )
}
export default CounterFunction;
import { useState } from "react";


export const Counter_main = () => {
  
    let [Counter,setCounter] =useState(0) 
    return (
        <>
            <div className="container">
                <div>
                    { Counter }
                </div>
                <div className="container my-2">
                    <button onClick={()=>{setCounter(Counter + 1 )}} >+</button>
                </div>
                <div className="container my-2">
                    <button onClick={()=>{setCounter(Counter - 1)}} >-</button>
                </div>
            </div>
        </>
    )
}
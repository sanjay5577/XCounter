import { useState } from "react";


const Counter =()=>{
  const [count,setCount]= useState(0);

  const handleCount =(event)=>{
    if(event.target.name==="increment"){
      setCount(count+1);
    }
    else{
      setCount(count-1);
    }
  }

  
  return(
    <div>
      <h1>Counter App</h1>
      <p mb="10px">Count: {count} </p>
      <button onClick={handleCount} name="increment">Increment</button>
      <button onClick={handleCount} name="decrement">Decrement</button>
    </div>
  )
}

export default Counter;
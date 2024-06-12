import { useState } from "react";


function App() {
  
  const [counter,setCounter] = useState(0);
  const addValue = () =>{
    setCounter(counter+1);
   
  }
  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>welcome to counter app</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={decreaseValue}>decrease value </button>
    </>
  )
}

export default App

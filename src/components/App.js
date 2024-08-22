
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName]=useState('')
  function greeting(e){
      setName(e.target.value)
  }
  return (
    <div>
      <label htmlFor={"inp"}>Enter your name:</label>
       <input type={"text"} id={"inp"}onInput={greeting}/>
       <p>Hello {name}!</p>
    </div>
  )
}

export default App

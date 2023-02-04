import React, { useState } from "react";
import './App.css';

const App = () => {

  const [name, setName] = useState("")
  const [fullName,setFullName] = useState()


  const inputEvent = (event) => {
    // console.log(event);
    setName(event.target.value)
  };
  const onSubmit = () =>{
    setFullName(name)
  }
  return (
    <div className="flex">
      <h1>Hello {fullName} </h1>
      <div className="colom">
      <input type="text" placeholder="enter your name" onChange={inputEvent} value={name} />
      <button onClick={onSubmit}>click me</button>
      </div>
    </div>
  );
};

export default App;

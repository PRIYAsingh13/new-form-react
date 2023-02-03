import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("priya")


  const inputEvent = (event) => {
    // console.log(event);
    setName(event.target.value)
  };
  return (
    <div>
      <h1>hello {name}</h1>
      <input type="text" placeholder="enter your name" onChange={inputEvent} />
      <button>click me</button>
    </div>
  );
};

export default App;

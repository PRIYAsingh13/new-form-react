import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState({
    fname : '',
    lname : '',
  });

  const onSubmits = (event) => {
    event.preventDefault();
  alert('form submit')
  };
  const inputEvent = (event) => {
    console.log(event.target.value);

    const value = event.target.value;
    const name = event.target.name;

    setName((preValue)=>{
      // console.log(preValue)
      if(name === 'fname'){
      return{  fname:value
        ,lname:preValue.lname,
      }
    }else if (name === 'lname'){
        return{ 
           fname:preValue.fname,
          lname:value,
        }
    }
    })
  };


  return (
    <>
      <form onSubmit={onSubmits}>
        <div className="flex">
          <h1>Hello {name.fname}{name.lname} </h1>
          <div className="colom">
            <input
              type="text"
              placeholder="enter your name"
              name="fname"
              onChange={inputEvent}
              value={name.fname}
            />
            <input
              type="text"
              placeholder="enter your lastName"
              name="lname"
              onChange={inputEvent}

              value={name.lname}
            />
            <button type="submit" >click me</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default App;

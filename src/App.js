<<<<<<< HEAD
import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import axios from "axios";

function App(){
const[nam,setnaam]=useState({
    name:"",
    password:""
});

let name,value
const handleinputs=(e)=>{
e.preventDefault();
name=e.target.name;
value=e.target.value;

setnaam({...nam,[name]:value})
}

console.log(nam)

  


    return(
        <div>
            
                <label>
                    Name
                </label>
                <input type="text" name="name"  onChange={handleinputs}></input>
            <label>
                    Password
                </label>
                <input type="password" name="password"  onChange={handleinputs}></input>
            {/* <button onClick={()=>{
                axios({
                    method: 'post',
                    url: '/user/12345',
                    data: {
                      firstName: 'Fred',
                      lastName: 'Flintstone'
                    }
                  });
            }}></button> */}
               
                
        </div>
    )
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        react trial dfdfdf
        </a>
      </header>
    </div>
  );
>>>>>>> c2acb4d6c2ca160efa1cf7776398a14b5b4b695b
}

export default App;
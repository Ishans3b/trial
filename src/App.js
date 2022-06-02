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
                    Namesdsddsdsdsdsdlqjnfkqjeljqebfkjqebfkqjekqdkqjekqbeb
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
}

export default App;
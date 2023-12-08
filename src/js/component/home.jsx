import React, { useState } from "react";


//create your first component
const Home = () => {
  const [inputValue, setInputValue ] = useState("")
  const [todos, setTodos ] = useState([])
  return (
    <div className="container">
      <p className=" fs-1 d-flex justify-content-center"> My Todos</p>
      <ul className="border border-light p-2 mb-2">
        <li>    
          <input 
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {  
              console.log("key was pressed", e.key)
              if(e.key == "Enter"){
                 setTodos(todos.concat([inputValue]));
                 setInputValue("");
                }   
            }}
              

            placeholder="What do you need to do"></input>

        </li>
        {todos.map((item, index) => (
        
        <li>
          {item} <i type="button"  className="btn btn-outline-danger" onClick={() => setTodos(todos.filter((t, currentindex) => index != currentindex))}>X</i>
        </li>
        ))}
        </ul>
      <div className="text-dark">{todos.length} Item left</div>
    </div>
  );
};

export default Home;

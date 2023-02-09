import './App.css';
import React, {useState} from 'react';

function App() {
    const [toDos,setToDos]= useState([]);
    const [toDo,setToDo]= useState('');

  
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type='text' placeholder='Add item...'></input>
      <br></br>
      <br></br>
      <button onClick={()=>setToDos([...toDos,toDo])}>ADD</button>
      <br></br>
      <br></br>
      <div className='toDo'>
        {
          toDos.map((value)=>{
            return(
              <div className='list'> 
                  <p>{value}</p>
              </div>
            
              )

          })
        }
      </div>
      
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Task from './components/Task';


function App() {

   
  const [tasks, setTasks] = useState([{name:"Complete todo app", completed:false}])



  const handleAddButton = () =>{
    let taskName = document.getElementsByClassName("TaskInput")[0].value
    if(taskName !== ""){
      document.getElementsByClassName("TaskInput")[0].value = ""
      setTasks([...tasks, {name:taskName, completed:false}])
    } 

  }

  return (
    <div >
      <div className="App">
        <h1>Add task:</h1>
        <input className="TaskInput"></input>
        <button className='AddButton' onClick={()=>{handleAddButton()}}>+</button>
      </div>
      <div className="TasksContainer">
        {Object.keys(tasks).map((t) => <Task name={tasks[t].name}/>)}
      </div>
    </div>
  );
}

export default App;

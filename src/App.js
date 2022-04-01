import './App.css';
import Header from './components/header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks_data, setTasks] = useState([
    {
      id:1,
      title: "Wake Up",
      time: "6:00 AM"
    },
    {
      id:2,
      title: "Brush teeth",
      time: "6:10 AM"
    },
    {
      id:3,
      title: "take a Bath",
      time: "6:30 AM"
    }
  ])
  const DeleteTasks = (id)=> {
    const new_tasks = tasks_data.filter((task) => id!== task.id)
    setTasks(new_tasks)
  } 

  return (
    <div className = "container" >
    <Header title="Track Tracker" />
    <Tasks tasks ={tasks_data} onDelete={DeleteTasks}/>
    </div>
  );
}

export default App;

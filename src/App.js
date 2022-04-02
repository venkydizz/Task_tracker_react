import './App.css';
import Header from './components/header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
  const [tasks_data, setTasks] = useState([
    {
      id:1,
      title: "Wake Up",
      time: "6:00 AM",
      reminder: true
    },
    {
      id:2,
      title: "Brush teeth",
      time: "6:10 AM",
      reminder: false
    },
    {
      id:3,
      title: "take a Bath",
      time: "6:30 AM",
      reminder: false
    }
  ])
  const [showForm,toggleshowForm] = useState(false)

  const DeleteTasks = (id)=> {
    const new_tasks = tasks_data.filter((task) => id!== task.id)
    setTasks(new_tasks)
  }

  const ToggleReminder = (id)=> {
    const new_tasks = tasks_data.map((tasks)=> tasks.id === id ? {...tasks, reminder: !tasks.reminder} : tasks)
    setTasks(new_tasks)

  }

  const AddTask = (task) => {
      const new_id = Math.floor(Math.random() * 10000)
      const new_tasks = [...tasks_data, {id:new_id, ...task}]
      setTasks(new_tasks)
  }



  return (
    <div className = "container" >
    <Header title="Track Tracker" showForm ={() =>toggleshowForm(!showForm)} isshowFrom={showForm} />
    {showForm ? <TaskForm onAdd = {AddTask}/> : ''}
    <Tasks tasks ={tasks_data} onDelete={DeleteTasks} onToggle={ToggleReminder}/>
    </div>
  );
}

export default App;

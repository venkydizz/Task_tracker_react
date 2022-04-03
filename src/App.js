import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [tasks_data, setTasks] = useState([])
  const [showForm,toggleshowForm] = useState(false)

  const getTasksfromserver = async()=>{
    const res = await fetch('http://localhost:8000/Tasks')
    const Tasks = res.json()
    return Tasks
  }

  const getTaskfromserver = async(id)=>{
    const res = await fetch(`http://localhost:8000/Tasks/${id}`)
    const Task = res.json()
    return Task
  }

  const setTasksState = async()=> {
    const Tasks = await getTasksfromserver()
    setTasks(Tasks)
  }

  useEffect(()=> {
      setTasksState()
  },[])

  const DeleteTasks = async(id)=> {
    await fetch(`http://localhost:8000/Tasks/${id}`, {method: "DELETE"})

    const new_tasks = tasks_data.filter((task) => id!== task.id)
    setTasks(new_tasks)
  }

  const ToggleReminder = async(id)=> {
    const task = await getTaskfromserver(id)
    const res = await fetch(`http://localhost:8000/Tasks/${id}`, 
        {method: "PUT",
        headers: {'content-type':'application/json'}, 
        body: JSON.stringify({...task, reminder: !task.reminder})
        })

    const updatedTask = await res.json()
    const new_tasks = tasks_data.map((tasks)=> tasks.id === updatedTask.id ? {...tasks, reminder: updatedTask.reminder} : tasks)
    setTasks(new_tasks)

  }

  const AddTask = async(task) => {
      const res = await fetch(`http://localhost:8000/Tasks/`, 
        {method: "POST",
        headers: {'content-type':'application/json'}, 
        body: JSON.stringify(task)
        })

      const addedTask = await res.json()
      setTasks([...tasks_data,addedTask])
      // const new_id = Math.floor(Math.random() * 10000)
      // const new_tasks = [...tasks_data, {id:new_id, ...task}]
      // setTasks(new_tasks)
  }



  return (
    <Router>
    <div className = "container" >
    <Header title="Track Tracker" showForm ={() =>toggleshowForm(!showForm)} isshowFrom={showForm} />
    <Routes>
      <Route path='/' element={
        <>
        {showForm ? <TaskForm onAdd = {AddTask}/> : ''}
        <Tasks tasks ={tasks_data} onDelete={DeleteTasks} onToggle={ToggleReminder}/>
        </>
      }/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;

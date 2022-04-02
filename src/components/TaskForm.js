import { useState } from "react"

const TaskForm = ({onAdd}) =>{
    const [title,setTitle] = useState('')
    const [time,setTime] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title){
            alert('Please Enter Task Name')
            return
        }

        onAdd({title, time, reminder})
        
        setTitle('')
        setTime('')
        setReminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task Name</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.currentTarget.value)} placeholder="Enter Name" ></input>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" value={time} onChange={(e)=>setTime(e.currentTarget.value)} placeholder="Enter Day and Time" ></input>
            </div>
            <div className="form-control form-control-check">
                <label >Add Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <button className="btn btn-block" type="submit">Save Task</button>
        </form>
    )
}

export default TaskForm
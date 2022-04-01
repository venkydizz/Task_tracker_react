import Task from "./Task"

const Tasks = ({tasks, onDelete}) =>{
    return(
        <>
            {tasks.length > 0 ? 
            tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} />): 
            <h2>No Tasks To DO</h2>}
        </>
    )
}

export default Tasks
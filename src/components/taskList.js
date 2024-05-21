import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
function TaskList() {
    const task = useSelector(state => state.tasks)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <body className="w-4/6">
            <header className="flex justify-between items-center py-3">
                <h1>Task Creator</h1>
                <Link to={'/create'} className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Create task</Link>
            </header>
            <h2> Total Task: {task.length}</h2> 
            <div className="grid grid-cols-3 gap-4">

                {task.map(task => (
                    <div key={task.id} className="bg-neutral-800  p-4 rounded-lg">
                        <header>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <div className="flex justify-between">
                                <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-md rounded-md">delete</button>
                                <Link to={`/edit/${task.id}`} className="bg-zinc-600 px-2 py-1 text-md rounded-md">Edit</Link>
                            </div>
                        </header>
                    </div>
                ))}
            </div>
        </body>


    )
}
export default TaskList
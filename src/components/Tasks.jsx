import { useContext } from "react"
import { todoContext } from '../context/TodoContext'

const Tasks = ({ taskMenu }) => {
    const { todo, setTodo } = useContext(todoContext);
    console.log(todo);
    return (
        <div style={{ scale: `${taskMenu ? "1" : "0"}` }} className="taskMenus absolute inset-0 py-4 px-6">
            <h1>My Tasks</h1>
            <div>
                {todo.map((elem, idx) => {
                    return <div key={idx}>
                        {elem.todoName}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Tasks

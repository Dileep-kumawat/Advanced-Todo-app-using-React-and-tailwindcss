import { createContext, useState } from "react"

export const todoContext = createContext(null);

const TodoContext = ({ children }) => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    const [filtered, setFiltered] = useState(todo);
    const [todoType, setTodoType] = useState("All")
    return (
        <todoContext.Provider value={{ todo, setTodo, filtered, setFiltered, todoType, setTodoType }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext
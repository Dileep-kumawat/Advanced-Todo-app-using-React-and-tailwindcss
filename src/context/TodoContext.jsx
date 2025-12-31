import { createContext, useState } from "react"

export const todoContext = createContext(null);

const TodoContext = ({ children }) => {
    const [todo, setTodo] = useState([]);
    return (
        <todoContext.Provider value={{ todo, setTodo }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext

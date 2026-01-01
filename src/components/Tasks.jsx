import { useContext, useEffect } from "react"
import { todoContext } from '../context/TodoContext'

const Tasks = ({ taskMenu }) => {
    const options = {
        Idea: "ri-lightbulb-ai-line",
        Food: "ri-restaurant-2-line",
        Work: "ri-draft-fill",
        Sport: "ri-basketball-fill",
        Music: "ri-music-2-line",
    };
    const { todo, setTodo, filtered,setFiltered, todoType } = useContext(todoContext);
    const handleToggle = (index) => {
        let oldTodos = todo.map((item, i) => i === index ? { ...item, completed: !item.completed } : item);
        setTodo(oldTodos);
    };
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
        const groupedTodos = {
            All: [],
            Idea: [],
            Food: [],
            Work: [],
            Music: [],
            Sport: [],
        };

        todo.forEach(todo => {
            if (groupedTodos[todo.type]) {
                groupedTodos[todo.type].push(todo);
            }
            groupedTodos.All.push(todo);
        });

        setFiltered(groupedTodos[todoType]);
    }, [todo]);

    return (
        <div style={{ scale: `${taskMenu ? "1" : "0"}` }} className="taskMenus flex flex-col absolute inset-0 py-4 px-6">
            <h1 className="text-2xl font-bold">{todoType} Tasks</h1>
            <div className="py-4 w-full relative h-full flex flex-col gap-4 overflow-auto">
                {filtered.map((elem) => {
                    return <div key={elem.id}
                        className="group bg-[#F1E4FE] hover:bg-[#A067EA]
                        text-[#A067EA] hover:text-white
                        cursor-pointer flex items-center gap-4
                        py-2 px-4 rounded transition-colors"
                    >
                        <i className={`${options[elem.type]} text-3xl`}></i>

                        <div className="w-full  text-black group-hover:text-white">
                            <h1 className="text-xl">{elem.todoName}</h1>
                            <p className="opacity-70 w-full group-hover:opacity-100">
                                {elem.todoDesc}
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            onChange={() => handleToggle(elem.id)}
                            checked={elem.completed}
                            className="accent-[#A067EA] group-hover:accent-[white] scale-150"
                        />
                    </div>
                })}
                {filtered.length <= 0 && <div className="absolute top-1/2 left-1/2 text-2xl whitespace-nowrap -translate-1/2"><i className="ri-folder-open-fill text-3xl text-[#A067EA]"></i> No Todo Found</div>}
            </div>
        </div>
    )
}

export default Tasks

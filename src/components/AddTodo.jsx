import { useContext, useState } from "react";
import TaskTypeDropdown from "./TaskTypeDropdown"
import { todoContext } from '../context/TodoContext'

const AddTodo = ({ createTaskOpened, createTaskOpenedHandler }) => {
    const { todo, setTodo, setFiltered, todoType } = useContext(todoContext);
    const options = [
        { value: "Idea", label: "Idea", icon: "ri-lightbulb-ai-line" },
        { value: "Food", label: "Food", icon: "ri-restaurant-2-line" },
        { value: "Work", label: "Work", icon: "ri-draft-fill" },
        { value: "Sport", label: "Sport", icon: "ri-basketball-fill" },
        { value: "Music", label: "Music", icon: "ri-music-2-line" },
    ];
    const [selected, setSelected] = useState(options[0]);
    const [todoName, setTodoName] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    return (
        <div className={`bg-[#F1E4FE] absolute text-black inset-0 taskMenus flex flex-col ${createTaskOpened ? "" : "left-full"}`}>
            <div className="py-12 px-6 w-full flex justify-between text-2xl">
                <i onClick={createTaskOpenedHandler} className="ri-arrow-left-line active:scale-95 transition cursor-pointer"></i>
                <h1 className="font-bold cursor-pointer">Create Task</h1>
                <i className="ri-timer-line"></i>
            </div>
            <div className="bg-white rounded-tl-4xl grow p-8">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let oldTodos = [...todo];
                    oldTodos.push({ id: oldTodos.length, type: selected.value, todoName, todoDesc, completed: false })
                    localStorage.setItem("todo", JSON.stringify(oldTodos));
                    setTodo(oldTodos);
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
                    setSelected(options[0]);
                    setTodoName("");
                    setTodoDesc("");
                    createTaskOpenedHandler();
                }} className="flex flex-col h-full items-stretch gap-4 *:w-full">
                    <TaskTypeDropdown options={options} selected={selected} setSelected={setSelected} />
                    <input value={todoName} onChange={(e) => {
                        setTodoName(e.target.value);
                    }} required type="text" placeholder="Name..." className="outline-none py-3 px-6 border border-gray-400 rounded" />
                    <textarea onChange={(e) => {
                        setTodoDesc(e.target.value);
                    }} value={todoDesc} placeholder="Text Description..." className="h-[40%] outline-none py-3 px-6 border border-gray-400 rounded"></textarea>
                    <button className="text-white bg-[#A067EA] w-full py-2 px-4 rounded active:scale-95 transition">Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodo

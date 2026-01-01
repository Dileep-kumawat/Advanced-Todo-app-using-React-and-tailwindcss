import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

const Categories = ({ taskMenu, taskMenuHandler }) => {
  const { todo, setTodoType, setFiltered } = useContext(todoContext);
  const options = [
    { value: "All", label: "All", icon: "ri-corner-up-left-double-line" },
    { value: "Idea", label: "Idea", icon: "ri-lightbulb-ai-line" },
    { value: "Food", label: "Food", icon: "ri-restaurant-2-line" },
    { value: "Work", label: "Work", icon: "ri-draft-fill" },
    { value: "Sport", label: "Sport", icon: "ri-basketball-fill" },
    { value: "Music", label: "Music", icon: "ri-music-2-line" },
  ];
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
  return (
    <div style={{ scale: `${taskMenu ? "0" : "1"}` }} className="taskMenus md:overflow-auto flex flex-col absolute inset-0 py-4 px-6">
      <h1 className="text-2xl font-bold">Choose Activity</h1>
      <div className="py-4 w-full h-full flex flex-col gap-4">
        {options.map((elem, idx) => {
          return <div onClick={() => {
            setTodoType(elem.label);
            setFiltered(groupedTodos[elem.label]);
            taskMenuHandler();
          }} key={idx} className="group grow bg-[#F1E4FE] hover:bg-[#A067EA] text-[#A067EA] hover:text-white  cursor-pointer flex items-center gap-4 w-full py-2 px-4 rounded transition-colors active:scale-[98%]"
          >
            <i className={`${elem.icon} text-3xl`}></i>
            <div className="w-full text-black group-hover:text-white">
              <h1 className="text-xl">{elem.label}</h1>
              <h4 className="opacity-70 w-full group-hover:opacity-100">{Object.keys(groupedTodos[elem.label]).length} Items</h4>
            </div>
            <i className="ri-arrow-drop-right-line scale-200"></i>
          </div>
        })}
      </div>
    </div >
  )
}

export default Categories

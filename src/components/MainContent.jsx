import { useState } from "react"
import Navbar from "./Navbar"
import Tasks from "./Tasks";
import Categories from "./Categories";
import AddTodo from "./AddTodo";

const MainContent = () => {
  const [taskMenu, setTaskMenu] = useState(false);
  const [createTaskOpened, setCreateTaskOpened] = useState(false);
  function taskMenuHandler() {
    setTaskMenu(prev => !prev);
  }
  function createTaskOpenedHandler() {
    setCreateTaskOpened(prev => !prev);
  }
  return (
    <div className="absolute overflow-hidden inset-0 md:top-1/2 md:left-1/2 md:-translate-1/2 bg-[#A067EA] text-white md:rounded-2xl flex flex-col md:w-97.5 md:h-[90vh]">
      <Navbar taskMenuHandler={taskMenuHandler} createTaskOpenedHandler={createTaskOpenedHandler} />
      <div id="container" className="w-full relative grow bg-white rounded-tl-4xl text-black">
        <Tasks taskMenu={taskMenu} />
        <Categories taskMenu={taskMenu} taskMenuHandler={taskMenuHandler} />
      </div>
      <AddTodo createTaskOpened={createTaskOpened} createTaskOpenedHandler={createTaskOpenedHandler} />
    </div>
  )
}

export default MainContent

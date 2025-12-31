
const Navbar = ({ taskMenuHandler, createTaskOpenedHandler }) => {
    const dateObj = (() => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const date = new Date;
        return {
            day: days[date.getDay()],
            month: months[date.getMonth()],
            date: date.getDate(),
            year: date.getFullYear(),
        }
    })();
    return (
        <div className="py-12 px-6 w-full">
            <div id="top" className="flex w-full justify-between items-center text-2xl">
                <i onClick={taskMenuHandler} className="ri-booklet-fill active:scale-95 transition cursor-pointer"></i>
                <h1 className="font-bold uppercase cursor-pointer"><a target="_blank" href="https://www.linkedin.com/in/dileep-kumawat/">Dil se Todo</a></h1>
                <i className="ri-timer-line"></i>
            </div>
            <div id="bottom" className="pt-8 flex w-full justify-between items-center">
                <div id="date" className="-space-y-1">
                    <h1 className="text-2xl text-gray-200">{dateObj.day}</h1>
                    <h4 className="pl-0.5 text-sm text-gray-300">{`${dateObj.date} ${dateObj.month}, ${dateObj.year}`}</h4>
                </div>
                <button onClick={createTaskOpenedHandler} className="bg-white py-2 transition px-4 rounded active:scale-95 cursor-pointer text-[#A067EA] font-semibold">Add New</button>
            </div>
        </div>
    )
}

export default Navbar

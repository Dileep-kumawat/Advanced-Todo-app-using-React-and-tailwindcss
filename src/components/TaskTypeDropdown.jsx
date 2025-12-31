import { useState, useRef, useEffect } from "react";

export default function TaskTypeDropdown({ selected, options, setSelected }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative w-64">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex cursor-pointer items-center outline-none justify-between p-6 text-3xl shadow-2xl shadow-[#F1E4FE] rounded-md bg-[#F1E4FE]"
            >
                <span className="flex items-center gap-2">
                    <i className={`${selected.icon} text-[#A068EC]`}></i>
                    {selected.label}
                </span>
                <i className="ri-arrow-down-s-line"></i>
            </button>

            {open && (
                <ul className="absolute z-10 mt-2 w-full outline-none bg-white rounded-md shadow">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#F1E4FE]"
                        >
                            <i className={`${option.icon} text-[#A068EC]`}></i>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            <input type="hidden" name="taskType" value={selected.value} />
        </div>
    );
}
/* eslint-disable no-unused-vars */
import React ,{ useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TaskInput() {
 
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  

  return (
    <div className="w-screen flex items-center mb-3 justify-center ">
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <div className=" bg-slate-600 p-4 rounded-md">
        <input
          type="text"
          className="  rounded border mr-4 border-gray-800  text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white font-semibold bg-blue-400 border-0 p-[6.5px] px-6 focus:outline-none hover:bg-white hover:text-black translate-x-1
           rounded text-lg mt-5 ml-7"
        >
          Add Todo
        </button>
        </div>
      </form>
   
    </div>
  );
}

export default TaskInput;

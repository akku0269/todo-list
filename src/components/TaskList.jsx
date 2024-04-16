
import { useDispatch, useSelector } from "react-redux";

import { removeTodo,toggleComplete } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();


  const toggleCompleted = (todoId)=>{
    dispatch(toggleComplete(todoId))
  }
  
  return (
    <>
    <div className="w-screen flex items-center p-2  justify-center">
    <ul className=" w-[700px]   bg-stone-200 rounded-sm" >
        {todos.map((todo) => (
          <li className="m-1.5 flex h-12 justify-between items-center  bg-stone-600  rounded"
           key={todo.id}
          >
            <input
              type="checkbox"
              className="cursor-pointer ml-4 mr-3 size-4"
              checked={todo.completed} //  Reflecting the completion status of todo item
              onChange={() => toggleCompleted(todo.id)} // Calling toggleCompleted function with todo id
            />
            <div className={` text-white font-semibold ${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </div>
            <button 
            onClick={()=> dispatch(removeTodo(todo.id))}    // Here todoItem is removed using it's id
            className="text-black border-2 m-3 p-1 font-bold rounded text-md bg-red-50 hover:border-red-500 "
            >✖
            </button>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
  
}

export default Todos;

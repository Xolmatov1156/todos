import React, { useContext, useRef } from 'react'
import { Context } from './Context/Context'

function TodoForm (){
  const {todos , setTodos, AddTodo} = useContext(Context)
  const inputRef = useRef()
function handleSubmit(e){
  e.preventDefault()
  const todo = {
    id:todos.length ? todos[todos.length - 1].id + 1 : 1,
    title:inputRef.current.value,
    isComplated:false,
  }
  AddTodo(todo)
  e.target.reset()
}
  return (
    <>
    <div className="w-[650px] mx-auto mt-[100px] py-5 rounded-lg">
                <h1 className="text-center text-[28px] font-normal text-violet-500 tracking-wide">
                    Todo
                </h1>
              <form onSubmit={handleSubmit} className="w-[600px] mx-auto mt-[50px] gap-5 flex">
              <input type="text" ref={inputRef} placeholder="Enter your todo" required name="todo" autoComplete="off"className="outline-none border-[1px] border-slate-500 w-[79%] p-[10px] rounded-md hover:bg-violet-400 hover:placeholder:text-white hover:text-white" />
              <button className="bg-violet-600 w-[20%] py-[10px] rounded-md text-white hover:text-slate-500 hover:bg-white hover:border-[1px] hover:border-slate-500">Add</button>
              </form>
                <div className="w-[600px] mx-auto flex justify-between mt-[50px]">
                    <button className="w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]">
                        All (0)
                    </button>
                    <button className="w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]">
                        Complated (0)
                    </button>
                    <button className="w-[150px] py-3 bg-violet-500 text-white rounded-md text-[14px]">
                        Uncomplated (0)
                    </button>
                </div>
            </div>
            </>
  )
}

export default TodoForm

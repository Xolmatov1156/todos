import React, { useContext } from 'react'
import UpdateBtn from '../src/assets/images/update.svg'
import DeleteBtn from '../src/assets/images/delete.svg'
import { Context } from './Context/Context'
import Modal from './Modal'


const TodoList = () => {
  const {todos , setTodos} = useContext(Context)
  function DeleteTodo(id){
    const findedIndex = todos.findIndex(item => item.id == id)
    todos.splice(findedIndex, 1)
    setTodos([...todos])
  }
  return (
    <>
    <ul className='w-[600px] mx-auto flex flex-col gap-5 mt-[50px]'>
    {todos.map((item, index) => (
        <li key={index} className='w-full bg-violet-500 text-white rounded-md p-[10px] flex justify-between'>
          <div className='flex gap-3'>
          <span>{index + 1}</span>
          {item.title}
          </div>
        <div className='flex items-center gap-3'>
        <input type="checkbox"/>
        <button><img src={UpdateBtn} alt="update" className='text-white'/></button>
        <button onClick={() => DeleteTodo(item.id)}><img src={DeleteBtn} alt="delete" className='text-white'/></button>
        </div>
        </li>
    ))}
</ul>
    <Modal />
    </>
  )
}

export default TodoList

import {createContext, useState} from 'react'

const Context = createContext() 
const TodoContext = ({children}) => {
  // const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [] )
    
  // window.localStorage.setItem("todos", JSON.stringify(todos))
  return (
    <Context.Provider value={{todos, setTodos}}>{children}</Context.Provider>
  )
}
export {Context, TodoContext}

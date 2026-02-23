import './App.css'
import EventToDo from './EventToDo'
import EventTodo from './EventToDo'
import Counter from './Counter'
import Search from './Serach'
import { useEffect } from 'react'
function App() {
  useEffect(()=> {console.log("Welcome")},[])
  useEffect(() => {console.log("Count updated")},[Counter])

  return (
    <>
     <Search />
    </>
  )
}

export default App
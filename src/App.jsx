import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center max-w-md mx-auto border border-black p-10">
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App

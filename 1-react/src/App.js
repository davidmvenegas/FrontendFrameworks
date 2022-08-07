import { useState, useEffect, useRef } from 'react'

function App() {
  const todoText = useRef()
  const [todos, setTodos] = useState(['hello'])

  function handleTodos(e) {
    e.preventDefault()
    const current = [todoText.current.value, ...todos]
    setTodos(current)
    localStorage.setItem('todos', JSON.stringify(current))
    todoText.current.value = ''
  }

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('todos'))
    setTodos(existing ? existing : [])
  }, [])

  return (
    <div>
      <ul id="todos">{todos.map(todo => (
          <li key={Math.random()}>{todo}</li>
        )
      )}</ul>

      <form onSubmit={(e) => handleTodos(e)}>
        <input ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default App
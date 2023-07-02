import { useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const onCount = (): void => {
    setCount((count) => {
      return count + 1
    })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

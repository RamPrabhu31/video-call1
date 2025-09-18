import { useState } from 'react'
import AppBuilder from '@appbuilder/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      margin:0,
      padding:0,
      flexDirection:"column",
    }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>    
        <AppBuilder.View/>    
    </div>
  )
}

export default App

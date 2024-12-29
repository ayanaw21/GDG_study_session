import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Decreament
        </button>
        <button className="result">
          {count}
        </button>
        <button onClick={()=>setCount((count)=>count+1)}>
          increement
        </button>
        <button onClick={() => setCount(0)}>
          Resete
        </button>
        
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Content Genius</h1>
          <p className="text-gray-600 mb-4">
            A powerful content creation tool
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Count is {count}
          </button>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App

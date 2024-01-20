import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { trpc } from './trpc';

function App() {
  const [count, setCount] = useState(0)

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}users`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const getUser = async function() {
    const user = await trpc.getUser.query('test');
    console.log(user);
  }

  useEffect(() => {
    // Ausführen beim Laden der Komponente
    fetchUsers();
    
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => getUser()  }>
          count is {count}
        </button>
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

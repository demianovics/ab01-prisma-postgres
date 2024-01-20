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

  const getUser = async () => {
    const user = await trpc.getUser.query('test');
    console.log(user);
    // we have type safet here!
  }

  const getUsers = async () => {
    const users = await trpc.getUsers.query();
    console.log(users);
    // we have type safet here!
  }

  useEffect(() => {
    // Ausführen beim Laden der Komponente
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <button onClick={() => fetchUsers() }>
          fetch("/users")
        </button>
        <br />
        <br />
        <button onClick={() => getUser() }>
          tRPC.getUser()
        </button>
        <br />
        <br />
        <button onClick={() => getUsers() }>
          tRPC.getUsers()
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

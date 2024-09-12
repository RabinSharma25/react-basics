import { useState } from 'react'
import './App.css'
import Profile from "./components/Profile"
import Login from "./components/Login"
import { UserContextProvider } from './context/UserContextProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Learning context api</h1>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App

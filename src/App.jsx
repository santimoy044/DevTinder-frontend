import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from  './NavBar' 
import { BrowserRouter, Routes, Route } from    'react-router-dom'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>

      </Route>


      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App

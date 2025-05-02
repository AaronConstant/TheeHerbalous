import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.tsx'
import Home from './Components/Home.tsx'
function App() {

  return (
    <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

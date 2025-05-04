import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.tsx'
import Home from './Components/Home.tsx'
import About from './Components/About.tsx'
import Contact from './Components/Contact.tsx'
import LoginForm from './Components/LoginForm.tsx'
function App() {

  return (
    <>
  <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

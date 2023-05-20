import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'

export default function NavBar({ user, setUser, handleLogout }) {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className='navBar'>
      <button onClick={handleToggle}><img src="https://img.icons8.com/ios-glyphs/512/menu.png" alt="menu" /></button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        <li><Link to="/about" className="navLink">About</Link></li>
        <li><Link to="/contact" className="navLink">Contact</Link></li>
        <li><Link to="/terms" className="navLink">Glossary of Terms</Link></li>
      </ul>
    </nav>
  )
}
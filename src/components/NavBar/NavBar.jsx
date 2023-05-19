import { Link } from 'react-router-dom'
import { useState } from 'react'
// import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  const [navbarOpen, setNavbarOpen] = useState(false)

  // function handleLogOut() {
  //   userService.logOut()
  //   setUser(null)
  // }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className='navBar'>
      <button onClick={handleToggle}><img src="https://img.icons8.com/ios-glyphs/512/menu.png" alt="menu" /></button>
      {/* {user ? */}
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        {/* <li>Welcome, {user.name}</li> */}
        <li><Link to="/about" className="navLink">About</Link></li>
        <li><Link to="/contact" className="navLink">Contact</Link></li>
        <li><Link to="/terms" className="navLink">Glossary of Terms</Link></li>
        {/* <li><Link to="" onClick={handleLogOut} className="navLink">Log Out</Link></li> */}
      </ul>
      {/* :
        <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul> */}
    </nav>
  )
}
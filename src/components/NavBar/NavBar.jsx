import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ setModalShow }) {

  const location = useLocation()
  const learnLinkStyle = location.pathname === "/learn" ? "learnSelected" : "navLink"
  const glossaryLinkStyle = location.pathname === "/glossary" ? "glossarySelected" : "navLink"
  const aboutLinkStyle = location.pathname === "/about" ? "aboutSelected" : "navLink"
  const contactLinkStyle = location.pathname === "/contact" ? "contactSelected" : "navLink"

  return (
    <nav className='navBar'>
      <h3 className='name'>navigat<b>edu</b></h3>
      <ul className='navBarList'>
        <li><Link to="/learn" className={learnLinkStyle}>Learn</Link></li>
        <li><Link to="/glossary" className={glossaryLinkStyle}>Glossary</Link></li>
        <li><Link to="/about" className={aboutLinkStyle}>About</Link></li>
        <li><Link to="/contact" className={contactLinkStyle}>Contact</Link></li>
      </ul>
      <select>
        <option value="english">English</option>
        <option value="es">Spanish</option>
        <option value="zh-CN">Chinese</option>
        <option value="tl">Tagalog</option>
        <option value="vi">Vietnamese</option>
        <option value="fr">French</option>
      </select>
    </nav>
  )
}
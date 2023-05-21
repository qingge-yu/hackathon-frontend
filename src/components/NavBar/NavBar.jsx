import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import LanguageMenu from '../LanguageMenu/LanguageMenu'

export default function NavBar({ setModalShow, language, setLanguage, data }) {
  return (
    <nav className='navBar'>
      <h1 className='navigaedu'><NavLink to="/" className='navigateHome'>navigat<b style={{ color: "#3476EF" }}>edu</b></NavLink></h1>
      <ul className="navBarList">
        <li><NavLink to="/learn" className={({ isActive }) =>
          isActive ? "linkStyle learnActive" : "navBarList"}>Learn</NavLink></li>
        <li><NavLink to="/glossary" className={({ isActive }) =>
          isActive ? "linkStyle glossaryActive" : "navBarList"}>Glossary</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
          isActive ? "linkStyle aboutActive" : "navBarList"}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
          isActive ? "linkStyle contactActive" : "navBarList"}>Contact</NavLink></li>
      </ul>
      <div></div>
      <LanguageMenu language={language} setLanguage={setLanguage} />
    </nav >
  )
}
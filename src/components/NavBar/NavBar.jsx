import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavBar.css'
import LanguageMenu from '../LanguageMenu/LanguageMenu'

export default function NavBar({ setModalShow }) {

  return (
    <nav className='navBar'>
      <h1 className='navigaedu'>navigat<b style={{ color: "#3476EF" }}>edu</b></h1>
      <ul className="navBarList">
        <li><NavLink to="/learn" className={({ isActive }) =>
          isActive ? "linkStyle" : "navBarList"}>Learn</NavLink></li>
        <li><NavLink to="/glossary" className={({ isActive }) =>
          isActive ? "linkStyle" : "navBarList"}>Glossary</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
          isActive ? "linkStyle" : "navBarList"}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
          isActive ? "linkStyle" : "navBarList"}>Contact</NavLink></li>
      </ul>
      <LanguageMenu />
    </nav >
  )
}
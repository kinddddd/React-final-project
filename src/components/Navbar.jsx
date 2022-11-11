import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className='container'>
        <NavLink to="" activeclassname={'active'} className="item">Home</NavLink>
        <NavLink to="champions" activeclassname={'active'} className="item">Champions</NavLink>
        <NavLink to="createchampion" activeclassname={'active'} className="item">Create Champion</NavLink>
    </nav>
  )
}

export default Navbar
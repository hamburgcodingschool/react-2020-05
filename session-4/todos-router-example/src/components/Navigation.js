import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = ({removeDone}) => {
  return (
    <nav>
      <nav>
        <ul className="navList">
          <li><Link to="/">Open</Link></li>
          <li><Link to="/completed">Completed</Link></li>
        </ul>
      </nav>

    </nav>
  )
}

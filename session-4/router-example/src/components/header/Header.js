import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <nav className="container">
        <ul className={style.navigationList}>
          <li className={style.navigationListItem}><Link to="/">Home</Link></li>
          <li className={style.navigationListItem}><Link to="/about">About</Link></li>
          <li className={style.navigationListItem}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

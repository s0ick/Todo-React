import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = React.memo(({props}) => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <NavLink to='/tasks' className={style.link} activeClassName={style.active} >
          Tasks
        </NavLink>
        <NavLink to='/completed' className={style.link} activeClassName={style.active} >
          Completed
        </NavLink>
      </nav>
    </header>
  )
});

export default Header;
import React from "react";
import './Header.css';
import hamburger from '../../assets/images/Hamburger.svg'
import { Link } from "react-router-dom";

export function Header () {
  return (
    <header className='header-container'>
      <Link to='/'>
        <h1>Teams</h1>
      </Link>
      <Link to='/match-history'>
        <h1>Match History</h1>
      </Link>
    </header>
  )
}
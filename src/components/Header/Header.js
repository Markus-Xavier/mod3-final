import React from "react";
import './Header.css';
import hamburger from '../../assets/images/Hamburger.svg'

export function Header () {
  return (
    <header className='header-container'>
      <img src={hamburger} className='hamburger-img'/>
    </header>
  )
}
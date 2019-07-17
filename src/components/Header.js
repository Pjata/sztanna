import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Szent Anna Panzió</h1>
      <p>Rejtett kis oázis Esztergomban</p>
    </header>
)

export default Header

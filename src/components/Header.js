import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Szent Anna Panzio</h1>
      <p>Esztergomi panzio nagyon jo</p>
    </header>
)

export default Header

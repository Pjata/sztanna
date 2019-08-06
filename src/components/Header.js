import React from 'react'

import LanguageSwitcher from '../components/LanguageSwitcher'
import logo from '../assets/images/logo2.png'
import { FormattedMessage } from 'react-intl'

const Header = props => {
  console.log(props.langsMenu)

  return (
    <header id="header" className="alt">
      <LanguageSwitcher langs={props.langsMenu} />
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <h1>
        <FormattedMessage id={'headerCompTitle'} />
      </h1>
      <p>
        <FormattedMessage id={'headerCompSubtitle'} />
      </p>
    </header>
  )
}

export default Header

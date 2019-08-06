import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { FormattedMessage } from 'react-intl'
import Footer from './Footer'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">
            <FormattedMessage id={'navBemutat'} />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">
            <FormattedMessage id={'navSzobak'} />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">
            <FormattedMessage id={'navSzolg'} />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="velemenyek">
          <a href="#">
            <FormattedMessage id={'navVelemeny'} />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="foglalas">
          <a href="#">
            <FormattedMessage id={'navFoglalas'} />
          </a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav

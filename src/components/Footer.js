import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>
        <FormattedMessage id={'elerTitle'} />
      </h2>
      <dl className="alt">
        <dt>
          <FormattedMessage id={'elerCimTitle'} />
        </dt>
        <dd>Esztergom, Erzsébet kiralyné út 2</dd>
        <dt>
          <FormattedMessage id={'elerCimPhoneTitle'} />
        </dt>
        <dd>
          <FormattedMessage id={'elerPhone'} />
        </dd>
        <dt>E-mail</dt>
        <dd>
          <a href="#">szentannapanzio@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
)

export default Footer

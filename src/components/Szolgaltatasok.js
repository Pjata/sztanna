import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import ImageCarousel from './ImageCarousel'
import reggeliImage0 from '../assets/images/reggeli.jpeg'
import reggeliImage1 from '../assets/images/reggeli/pic0.jpg'
import reggeliImage2 from '../assets/images/reggeli/pic1.jpg'
const reggeliImages = [reggeliImage2, reggeliImage0, reggeliImage1]
const Szolgaltatasok = props => {
  return (
    <section id="second" className="main special">
      <header className="major">
        <h2>
          <FormattedMessage id={'szolgTitle'} />
        </h2>
        <div className={'szoba content'}>
          <h3>
            <FormattedMessage id={'szolgBreakf'} />
          </h3>
          <p>
            <FormattedMessage id={'szolgBreakfDesc'} />
          </p>
          <span
            style={{
              width: '100%',
            }}
          >
            <ImageCarousel images={reggeliImages} />
          </span>
        </div>
      </header>
      <ul className="statistics">
        <li className="style3">
          <span className="icon fa-wifi" />
          <strong>
            <FormattedMessage id={'szolgWiFiTitle'} />
          </strong>
          <p>
            <FormattedMessage id={'szolgWiFiDesc'} />
          </p>
        </li>
        <li className="style4">
          <span className="icon fa-bicycle" />
          <strong>
            <FormattedMessage id={'szolgBicycleTitle'} />
          </strong>
          <p>
            <FormattedMessage id={'szolgBicycleDesc'} />
          </p>
        </li>
        <li className="style5">
          <span className="icon fa-ship" />
          <strong>
            <FormattedMessage id={'szolgTuraKenuKajakTitle'} />
          </strong>
          <p>
            <FormattedMessage id={'szolgTuraKenuKajakDesc'} />
          </p>
        </li>
        <li className="style2">
          <i className="icon fas fa-swimmer" />
          <strong>
            <FormattedMessage id={'szolgAquaTitle'} />
          </strong>
          <p>
            <FormattedMessage id={'szolgAquaDesc'} />
          </p>
        </li>
      </ul>
    </section>
  )
}
export default Szolgaltatasok

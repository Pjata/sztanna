import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/szoba1.png'
import pic02 from '../assets/images/sarok.png'
import pic03 from '../assets/images/szoba2.png'
import pic04 from '../assets/images/szoba3.png'
import fenti from '../assets/images/fenti.jpeg'
import apartmanPhotos from '../assets/images/apartman'
import macSzoba from '../assets/images/szoba_mac'
import pinkSzoba from '../assets/images/szoba_pink'
import magentaSzoba from '../assets/images/szoba_magenta'
import rainForestSzoba from '../assets/images/szoba_rain'
import roseSzoba from '../assets/images/szoba_rose'
import apartmanFent from '../assets/images/apartman_fent'
import foldszintSzoba from '../assets/images/szoba_foldszint'
import ImageCarousel from './ImageCarousel'
import { FormattedMessage } from 'react-intl'

const Szobak = props => {
  return (
    <section id="first" className="main special">
      <header className="major">
        <h2>
          <FormattedMessage id={'szobakTitle'} />
        </h2>
      </header>
      <div className="spotlight">
        <p className={'content'}>
          <FormattedMessage id={'szobakDescription'} />
        </p>
      </div>
      <ul className="features">
        <li>
          <ImageCarousel images={apartmanPhotos} />
          <h3>
            <FormattedMessage id={'szobakKullApTitle'} />
          </h3>
          <p>
            <FormattedMessage id={'szobakKullApDesc'} />
          </p>
        </li>
        <li>
          <ImageCarousel images={macSzoba} />
          <h3>
            <FormattedMessage id={'szobakMacTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel images={pinkSzoba} />
          <h3>
            <FormattedMessage id={'szobakMentaTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel images={magentaSzoba} />
          <h3>
            <FormattedMessage id={'szobakPinkTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel images={rainForestSzoba} />
          <h3>
            <FormattedMessage id={'szobakRainforestTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel images={roseSzoba} />
          <h3>
            <FormattedMessage id={'szobakRoseTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel images={apartmanFent} />
          <h3>
            <FormattedMessage id={'szobakApartmanTitle'} />
          </h3>
          <p>
            <FormattedMessage id={'szobakApartmanDesc'} />
          </p>
        </li>
        <li>
          <ImageCarousel images={foldszintSzoba} />
          <h3>
            <FormattedMessage id={'szobakFloorTitle'} />
          </h3>
          <p>
            <FormattedMessage id={'szobakFloorDesc'} />
          </p>
        </li>
      </ul>
    </section>
  )
}
export default Szobak

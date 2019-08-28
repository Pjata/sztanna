import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/szoba1.png'
import pic02 from '../assets/images/sarok.png'
import pic03 from '../assets/images/szoba2.png'
import pic04 from '../assets/images/szoba3.png'
import fenti from '../assets/images/fenti.jpeg'
import ImageCarousel from './ImageCarousel'
import { FormattedMessage } from 'react-intl'
import useApartmantKulonImages from '../assets/images/apartman_kulon'
import useApartmantFentImages from '../assets/images/apartman_fent'
import useSzobafoldszintImages from '../assets/images/szoba_foldszint'
import useSzobaMac from '../assets/images/szoba_mac'
import useSzobaMagenta from '../assets/images/szoba_magenta'
import useSzobaPink from '../assets/images/szoba_pink'
import useSzobaRain from '../assets/images/szoba_rain'
import useSzobaRose from '../assets/images/szoba_rose'

const Szobak = props => {
  const apartmanFent = useApartmantFentImages()
  const apartmanKulon = useApartmantKulonImages()
  const macSzoba = useSzobaMac()
  const pinkSzoba = useSzobaPink()
  const magentaSzoba = useSzobaMagenta()
  const rainForestSzoba = useSzobaRain()
  const roseSzoba = useSzobaRose()
  const foldszintSzoba = useSzobafoldszintImages()
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
          <ImageCarousel data={apartmanKulon} />
          <h3>
            <FormattedMessage id={'szobakKullApTitle'} />
          </h3>
          <p>
            <FormattedMessage id={'szobakKullApDesc'} />
          </p>
        </li>
        <li>
          <ImageCarousel data={macSzoba} />
          <h3>
            <FormattedMessage id={'szobakMacTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel data={pinkSzoba} />
          <h3>
            <FormattedMessage id={'szobakMentaTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel data={magentaSzoba} />
          <h3>
            <FormattedMessage id={'szobakPinkTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel data={rainForestSzoba} />
          <h3>
            <FormattedMessage id={'szobakRainforestTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel data={roseSzoba} />
          <h3>
            <FormattedMessage id={'szobakRoseTitle'} />
          </h3>
        </li>
        <li>
          <ImageCarousel data={apartmanFent} />
          <h3>
            <FormattedMessage id={'szobakApartmanTitle'} />
          </h3>
          <p>
            <FormattedMessage id={'szobakApartmanDesc'} />
          </p>
        </li>
        <li>
          <ImageCarousel data={foldszintSzoba} />
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

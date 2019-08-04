import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/szoba1.png'
import pic02 from '../assets/images/sarok.png'
import pic03 from '../assets/images/szoba2.png'
import pic04 from '../assets/images/szoba3.png'
import fenti from "../assets/images/fenti.jpeg"
import apartmanPhotos from "../assets/images/apartman"
import macSzoba from "../assets/images/szoba_mac"
import pinkSzoba from "../assets/images/szoba_pink"
import magentaSzoba from "../assets/images/szoba_magenta"
import rainForestSzoba from "../assets/images/szoba_rain"
import roseSzoba from "../assets/images/szoba_rose"
import apartmanFent from "../assets/images/apartman_fent"
import foldszintSzoba from "../assets/images/szoba_foldszint"
import ImageCarousel from './ImageCarousel'

console.log(apartmanPhotos)
const Szobak = (props) => {
  return <section id="first" className="main special">
    <header className="major">
      <h2>Egyedi szobák, magas színvonalon</h2>
    </header>
    <div className="spotlight">
    <p className={"content"} >
      Szobáink mindegyike multifunkcionális klímával rendelkezik, mely egyénileg szabályozható fűtésre és hűtésre egyaránt.
      A szobákban nagyméretű LED TV található, melyen külföldi csatornák is foghatóak.
      Értékes tárgyaikat a szobai széfekben maximális biztonságban tudhatják.
      Minibárunk hideg italokról és finom snackekről gondoskodik.
    </p>
    </div>
    <ul className="features">
      <li>
        <ImageCarousel images={apartmanPhotos}/>
        <h3>Különálló apartmanház</h3>
        <p>A különálló apartmanházunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit</p>
      </li>
      <li>
        <ImageCarousel images={macSzoba}/>
        <h3>Arany-kék</h3>
      </li>
      <li>
        <ImageCarousel images={pinkSzoba}/>
        <h3>Menta</h3>
      </li>
      <li>
        <ImageCarousel images={magentaSzoba}/>
        <h3>Pink</h3>
      </li>
      <li>
        <ImageCarousel images={rainForestSzoba}/>
        <h3>Esőerdő</h3>
      </li>
      <li>
        <ImageCarousel images={roseSzoba}/>
        <h3>Rózsa</h3>
      </li>
      <li>
        <ImageCarousel images={apartmanFent}/>
        <h3>Apartman</h3>
        <p>A apartmanunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit</p>
      </li>
      <li>
        <ImageCarousel images={foldszintSzoba}/>
        <h3>Foldszinti szoba</h3>
        <p>Akadálymentesített</p>
      </li>
    </ul>
  </section>
}
export default Szobak

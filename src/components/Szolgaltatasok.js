import React from 'react'
import { Link } from 'gatsby'
import ImageCarousel from "./ImageCarousel"
import reggeliImage0 from "../assets/images/reggeli.jpeg"
import reggeliImage1 from "../assets/images/reggeli/pic0.jpg"
import reggeliImage2 from "../assets/images/reggeli/pic1.jpg"
const reggeliImages = [
  reggeliImage2,
  reggeliImage0,reggeliImage1]
const Szolgaltatasok = (props) => {
 return <section id="second" className="main special">
    <header className="major">
      <h2>Szolgáltatások</h2>
      <div className={"szoba content"}>
        <h3>Reggeli</h3>
        <p>Finom reggeli 1500 HUF / fő / éj áron kérhető</p>
      <span style={{
        width:"100%"
      }} >
        <ImageCarousel images={reggeliImages}/>

      </span>
      </div>
    </header>
    <ul className="statistics">
      <li className="style3">
        <span className="icon fa-wifi"></span>
        <strong>Wi-Fi</strong>
        <p>Ingyenes Wi-Fi szolgáltatás</p>
      </li>
      <li className="style4">
        <span className="icon fa-bicycle"></span>
        <strong>Bicikli bérlés</strong>
        <p>Kerékpár kölcsönzés 1500 HUF / fő / nap áron</p>
      </li>
      <li className="style5">
        <span className="icon fa-ship"></span>
        <strong>Túra kenu és kajak bérlés</strong>
        <p>Lehetőség van túra kenu és kajak bérlésre</p>
      </li>
      <li className="style2">
        <i className="fas fa-swimming-pool fa-2x"></i>
        <strong>Aquasziget kedvezmény</strong>
        <p>20 % kedvezményt nyújtó kupon az esztergomi Aquaszigetre
        </p>
      </li>
    </ul>
  </section>
}
export default Szolgaltatasok

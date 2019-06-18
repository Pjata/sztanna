import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/szoba1.png'
import pic02 from '../assets/images/sarok.png'
import pic03 from '../assets/images/szoba2.png'
import pic04 from '../assets/images/szoba3.png'

const Szobak = (props) => {
  return <section id="first" className="main special">
    <header className="major">
      <h2>Szobak nagyon jok</h2>
    </header>
    <ul className="features">
      <li>
        <div className={"szoba"}>
        <span className="image icon major"><img src={pic01} alt=""/></span>
        </div>
        <h3>Ide lehetne a szoba tipusok</h3>
        <p>mindegyikrol lehet majd lapozni gyorsan a kepeket</p>
      </li>
      <li>
        <div className={"szoba"}>
          <span className="image icon major"><img src={pic02} alt=""/></span>
        </div>
        <h3>Apartman kulon, stb</h3>
        <p>mindegyikrol lehet majd lapozni gyorsan a kepeket</p>
      </li>
      <li>
        <div className={"szoba"}>
          <span className="image icon major"><img src={pic03} alt=""/></span>
        </div>
        <h3>Galerias</h3>
        <p>mindegyikrol lehet majd lapozni gyorsan a kepeket</p>
      </li>
      <li>
        <div className={"szoba"}>
          <span className="image icon major"><img src={pic04} alt=""/></span>
        </div>
        <h3>Roki</h3>
        <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
      </li>
    </ul>
    <footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul>
    </footer>
  </section>
}
export default Szobak

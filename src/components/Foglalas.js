import React from 'react'
import { Link } from 'gatsby'
const Foglalas = props => {
 return <section id="cta" className="main special">
    <header className="major">
      <h2>Szoba foglalas</h2>
      <p>Amennyiben megtetszett a panzio johet a foglalas</p>
    </header>
    <footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button special">Foglalok</Link></li>
      </ul>
    </footer>
  </section>
}
export default Foglalas

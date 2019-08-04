import React, { useState } from 'react'
import { Link } from 'gatsby'
const Foglalas = props => {
  const [elfogadva, setElfogadva] = useState(false)
  return (
    <section id="foglalas" className="main special">
      <header className="major">
        <h2>Szoba foglalás</h2>
        <p>Ne késlekedjen, foglaljon most szobát!</p>
        <p>
          A foglaláshoz szükséges elfogadni a{' '}
          <a href="/hazirend">házirendet ami de kattintva elérhető</a>.
        </p>
        <input
          type="checkbox"
          checked={Boolean(elfogadva)}
          onChange={checked => {
            setElfogadva(Boolean(checked.target.checked))
          }}
        />
        Elfogadom a házirendet
      </header>
      {elfogadva && (
        <footer className="major">
          <ul clőassName="actions">
            <li>
              <a
                target="_blank"
                href="https://nethotelbooking.net/hotels/szentannapanzioesztergom"
                className="button special"
              >
                Foglalok!
              </a>
            </li>
          </ul>
        </footer>
      )}
    </section>
  )
}
export default Foglalas

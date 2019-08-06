import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
const Foglalas = props => {
  const { langKey } = props
  const [elfogadva, setElfogadva] = useState(false)
  return (
    <section id="foglalas" className="main special">
      <header className="major">
        <h2>
          <FormattedMessage id={'foglTitle'} />
        </h2>
        <p>
          <FormattedMessage id={'foglSubtitle'} />
        </p>
        <p>
          <FormattedMessage id={'foglHaziString'} />
          <Link to={`${langKey}/hazirend`}>
            <FormattedMessage id={'foglHaziLink'} />
          </Link>
        </p>
        <input
          type="checkbox"
          checked={Boolean(elfogadva)}
          onChange={checked => {
            setElfogadva(Boolean(checked.target.checked))
          }}
        />
        <FormattedMessage id={'foglAccept'} />
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
                <FormattedMessage id={'foglButton'} />
              </a>
            </li>
          </ul>
        </footer>
      )}
    </section>
  )
}
export default Foglalas

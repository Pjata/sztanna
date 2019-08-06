import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/door.png'
import { FormattedMessage } from 'react-intl'
const Bemutatkozas = props => {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>
              <FormattedMessage id={'bemutatkozasTitle'} />
            </h2>
          </header>
          <p>
            <FormattedMessage id={'bemutatkozasDescription'} />
          </p>
        </div>
        <span className="image">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>
  )
}
export default Bemutatkozas

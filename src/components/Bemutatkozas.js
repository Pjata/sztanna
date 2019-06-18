import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/door.png'
const Bemutatkozas = (props) => {
  return <section id="intro" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Rovid bemutatkozas, reklam szoveg</h2>
        </header>
        <p>Ide lehet majd irni kicsit hosszabb szoveget ahol bemutatod milyen jo kis panzio ez mellette rakunk jo kepet stb
          ez kb 4-5 mondat kellene hogy legyen.valahogy igy mint ez. most mar mire ezt olvasod nagyjabol el is erted az idealis meretet.
        </p>
      </div>
      <span className="image"><img src={pic01} alt=""/></span>
    </div>
  </section>
}
export default Bemutatkozas

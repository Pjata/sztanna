import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/door.png'
const Bemutatkozas = (props) => {
  return <section id="intro" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Családias környezet, meghitt hangulat</h2>
        </header>
        <p>Panziónk családi vállalkozásként 2003.-ban nyitotta meg kapuit. 2019.-ben felfrissülve, a mai kor igényeinek megfelelve 6 db két férőhelyes szobával , egy négy fős család számára kényelmes apartmannal és egy különálló szintén négy férőhelyes apartmanházzal várjuk vendégeinket.
        </p>
      </div>
      <span className="image"><img src={pic01} alt=""/></span>
    </div>
  </section>
}
export default Bemutatkozas

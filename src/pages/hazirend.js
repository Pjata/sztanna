import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Házirend" />
        <div id="main">
          <section id="content" className="main">
            <h2>Szent Anna Panzió és Apartman ház házirendje</h2>
            <p>Kedves Vendégünk!</p>
            <p>
              Hogy biztosítsuk az Ön kellemes pihenését és elkerüljük az
              esetleges félreértéseket, szeretnénk,ha megismerkedne a
              házirendünkkel.
            </p>
            <p>
              A foglalás igazolásánál feltételezhető, hogy Ön ismeri és
              elfogadja ezt a házirendet és be is fogja tartani . A házirend be
              nem tartása a foglalás lemondását és az egész összeg
              megfizettetését vonja magával , tekintet nélkül a szállás korábbi
              elhagyására. A tulajdonos minden információval és esetleges
              segítséggel az Önök szolgálatában áll a tartózkodás alatt.
              Javasoljuk, hogy a szállás minőségére vonatkozó esetleges
              kifogásokat rögtön érkezéskor hozzák a tulajdonos tudomására.
              Érkezéskor a vendég köteles a tulajdonosnak átadni az adatfelvétel
              miatt a személyes dokumentumait.
            </p>
            <p>
              Kérjük a szálláshely épületét és eszközeit rendeltetésszerűen
              használni, a tűz-és balesetvédelmi szabályokat betartani.
            </p>
            <p>
              A szállás területén okozott kárt a károkozó vagy annak törvényes
              képviselője köteles megtéríteni.
            </p>
            <p>
              A szálláshely területére behozott személyes értéktárgyakért
              felelősséget nem vállalunk. A vendég köteles vigyázni a személyes
              holmijára és értékeire, amennyiben a szálláshelyen hagyja őket,
              vállalja a felelősséget az esetleges eltűnésükért. Ez a felelősség
              a tulajdonost nem terheli. Amennyiben elhagyja a szállás területét
              ,kötelező bezárni az ajtót és az ablakokat.
            </p>
            <p>
              A szálláshelyre szigorúan tilos beengedni olyan személyeket, akik
              nem használói a szállásnak. Amennyiben a tulaj észrevesz olyan
              személyeket, akik nincsenek regisztrálva vagy nincsenek bejelentve
              a foglalás során, akkor a tulajdonosnak teljes körű jogában áll
              lemondani a szállást minden vendég részére.
            </p>
            <p>
              Kérjük, hogy a szobák és a panzió felszerelését ( törölköző,
              pokróc ) ne vigyék ki a panzió területéről,kivéve esernyő.
            </p>
            <p>
              A szálláshelyen este 22.00-8.00-ig hangoskodni, a többi vendég
              pihenését zavarni szigorúan tilos. Dohányozni az arra kijelölt
              helyeken szabad. A szálláson 18 éven aluli vendégek szeszes italt
              nem fogyaszthatnak , nem dohányozhatnak.
            </p>
            <p>
              Talált tárgyakat kérjük leadni a szálláshely vezetőjének.
              Balesetről vagy egyéb rendkívüli eseményről a szállás vezetőjét
              azonnal tájékoztatni kell.
            </p>
            <p>
              Nem engedélyezett a szálláshelyre bevinni fegyvert, gyúlékony és
              robbanó anyagot, illetve olyan anyagot, aminek szúrós, erős szaga
              van, valamint olyan készüléket ami étel készítésére szolgál(
              főzőlap) vagy más elektromos készüléket a tulajdonos beleegyezése
              nélkül.
            </p>
            <p>
              A szállásról kizárható az a személy, aki bűncselekményt vagy
              szándékos rongálást követ el, saját vagy mások testi épségét
              veszélyezteti, 22.00-8.00 óra között a pihenni vágyó vendégeket
              zavarja.
            </p>
            <p>
              A szállás területe és az épület előtti utcarész kamerával
              megfigyelt terület.
            </p>
            <p> Kellemes pihenést kívánunk !</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

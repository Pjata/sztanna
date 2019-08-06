import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Bemutatkozas from '../components/Bemutatkozas'
import Szobak from '../components/Szobak'
import Szolgaltatasok from '../components/Szolgaltatasok'
import Foglalas from '../components/Foglalas'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../assets/css/customCarousel.css'
import Velemenyek from '../components/Velemenyek'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import messages from '../data/messages/en'
import { FormattedMessage } from 'react-intl'

addLocaleData(en)

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout location={this.props.location} i18nMessages={messages}>
        {langsMenu => (
          <>
            <Helmet title={'Szent Anna Pension and Apartman'} />

            <Header langsMenu={langsMenu} />

            <Waypoint
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
            />
            <Nav sticky={this.state.stickyNav} />

            <div id="main">
              <Bemutatkozas />
              <Szobak />
              <Szolgaltatasok />
              <Velemenyek />
              <Foglalas langKey={'/en'} />
            </div>
          </>
        )}
      </Layout>
    )
  }
}

export default Index

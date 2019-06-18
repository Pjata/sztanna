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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Szent Anna Panzio" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <Bemutatkozas/>
          <Szobak/>
          <Szolgaltatasok/>
          <Foglalas/>





        </div>

      </Layout>
    )
  }
}

export default Index

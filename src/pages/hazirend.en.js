import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import SelectLanguage from '../components/LanguageSwitcher'

class Generic extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        {langsMenu => (
          <>
            <Helmet title="Házirend" />
            <SelectLanguage langs={langsMenu} />
            <div id="main">
              <section id="content" className="main">
                <h2>Szent Anna Guesthouse and Apartman house rules</h2>
                <p>Dear Guest,</p>
                <p>
                  To ensure your pleasant rest and to avoid it any
                  misunderstanding, we would like you to familiarize yourself
                  with guidelines.
                </p>
                <p>
                  When you confirm your reservation, it is assumed that you know
                  and you accept this policy and will abide by it. Not abiding
                  to this rules will result in full charge for your reservation.
                  On arrival, the guest is required to provide the owner with an
                  ID document for checking.
                </p>
                <p>
                  Please use the property and facilities as intended, obey fire
                  and accident prevention regulations.
                </p>
                <p>
                  In case of damage whether who has made the damage or who is
                  responsible for who has made the damage has to pay for the
                  harm.
                </p>
                <p>
                  We are not responsible for any personal belongings. If you
                  leave the guesthouse please close the door and window of your
                  room.
                </p>
                <p>
                  It is forbidden to accept guests who are not staying at the
                  guesthouse. We preserve the right to cancel your stay, if we
                  notice any non guests in the house.
                </p>
                <p>
                  Please do not take out the room equipment (towels, blanket) of
                  the pension area, except umbrellas.
                </p>
                <p>
                  At 22:00 to 8:00 disturbing the silence prohibited.In the area
                  of the hotel SMOKING IS PROHIBITED, it is only allowed outside
                  at the assigned places. Guests under the age of 18 cannot
                  consume alcohol or smoke in the pension area.
                </p>
                <p>The lost properties have to be given to the reception.</p>
                <p>Possession of weapons are forbidden.</p>
                <p>
                  We kindly ask our guests that in case of comments about the
                  hotel’s services, the behaviour of other guests, the look of
                  the hotel rooms please immediately contact the reception where
                  we will endeavour to solve the problem as soon as possible. We
                  cannot help in case of follow-up comments after leaving the
                  hotel.
                </p>
                <p>
                  At the hotel area there are several cameras in use for
                  security and safety purposes.
                </p>
                <p>
                  Not following the rules above can result in full charge for
                  your stay and in forced early leave.
                </p>
                <p> We wish you a pleasent stay!</p>
              </section>
            </div>
          </>
        )}
      </Layout>
    )
  }
}

export default Generic

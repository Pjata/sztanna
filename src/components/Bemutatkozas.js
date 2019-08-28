import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const Bemutatkozas = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "door.png" }) {
        name
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
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
          <Img fixed={data.file.childImageSharp.fixed} alt="" />
        </span>
      </div>
    </section>
  )
}
export default Bemutatkozas

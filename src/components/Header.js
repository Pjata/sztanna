import React from 'react'

import LanguageSwitcher from '../components/LanguageSwitcher'
import { FormattedMessage } from 'react-intl'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  const hero = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kert.png" }) {
        name
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(hero)
  const stack = [
    hero.file.childImageSharp.fluid,
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  ].reverse()
  return (
    <BackgroundImage className={'headerBg'} fluid={stack}>
      <header id="header" className="alt">
        <LanguageSwitcher langs={props.langsMenu} />
        <span className="logo">
          <Img fixed={data.file.childImageSharp.fixed} alt="" />
        </span>
        <h1>
          <FormattedMessage id={'headerCompTitle'} />
        </h1>
        <p>
          <FormattedMessage id={'headerCompSubtitle'} />
        </p>
      </header>
    </BackgroundImage>
  )
}
export default Header

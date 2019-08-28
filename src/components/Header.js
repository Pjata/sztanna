import React from 'react'

import LanguageSwitcher from '../components/LanguageSwitcher'
import logo from '../assets/images/logo2.png'
import { FormattedMessage } from 'react-intl'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo2.png" }) {
        name
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
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
  )
}

export default Header

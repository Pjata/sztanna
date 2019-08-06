import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

const SelectLanguage = props => {
  const links = props.langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: 'white',
      }}
    >
      <div>{lang.langKey}</div>
    </Link>
  ))

  return (
    <section
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 100,
        backgroundColor: 'black',
      }}
    >
      <header
        style={{
          color: 'white',
        }}
      />
      <div>{links}</div>
    </section>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
}

export default SelectLanguage

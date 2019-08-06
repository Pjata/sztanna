import React from 'react'
import PropTypes from 'prop-types'
import {
  getCurrentLangKey,
  getLangs,
  getUrlForLang,
  getUserLangKey,
} from 'ptz-i18n'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { IntlProvider } from 'react-intl'
import browserLang from 'browser-lang'
import 'intl'

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        console.log(langKey)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, '/'),
        }))
        const myLanguage = browserLang()
        console.log(langs)
        console.log(myLanguage)
        if (langs.includes(myLanguage)) {
          console.log(url)
        }
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            {children(langsMenu)}
          </IntlProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

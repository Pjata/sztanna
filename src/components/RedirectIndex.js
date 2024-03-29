import React from 'react'
import { StaticQuery, graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/`)
      if (langKey !== 'hu') {
        // I don`t think this is the best solution
        // I would like to use Gatsby Redirects like:
        // https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redirects
        // But Gatsby Redirects are static, they need to be specified at build time,
        // This redirect is dynamic, It needs to know the user browser language.
        // Any ideias? Join the issue: https://github.com/hugomn/gatsby-starter-default-i18n/issues/4
        // window.___history.replace(homeUrl);
        navigate(homeUrl)
      }
    }
  }

  render() {
    return <div />
  }
}

const RedIndex = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return <RedirectIndex data={data} />
      }}
    />
  )
}

export default RedIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`

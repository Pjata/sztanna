import { useStaticQuery, Link, graphql } from 'gatsby'
const useImages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            dir: { glob: "**/szoba_pink" }
            extension: { ne: "js" }
            name: { regex: "/^(?!X_).*/" }
          }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  )
  return data.allFile.edges.map(({ node }) => node)
}

export default useImages

import apartman0 from './apartman_0.jpeg'
import apartman1 from './apartman_1.jpeg'
import apartman2 from './apartman_2.jpeg'
import apartman3 from './apartman_3.jpeg'
import apartman4 from './apartman_4.jpeg'
import apartman5 from './apartman_5.jpeg'
import apartman6 from './apartman_6.jpeg'
import { useStaticQuery, Link, graphql } from 'gatsby'
export const useApartmantFentImages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            dir: { glob: "**/apartman_kulon" }
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

export default useApartmantFentImages

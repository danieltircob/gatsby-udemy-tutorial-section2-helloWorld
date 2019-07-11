import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query Metadata {
    site {
      siteMetadata {
        johnauthor: author
        description
        title
        data {
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)

  console.log()

  const author = info.johnauthor

  return (
    <div>
      {/* <h1>Author: {data.site.siteMetadata.author}</h1> */}
      <h1>Author: {author}</h1>
      <h1>Title {info.title} </h1>
    </div>
  )
}

export default Header

import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  {
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

const HeaderStaticComp = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <h1>Description: {data.site.siteMetadata.description} </h1>
          </div>
        )
      }}
    >
      {/* <h1>Author: {data.site.siteMetadata.author}</h1> */}
    </StaticQuery>
  )
}

export default HeaderStaticComp

import React from "react"
import HeaderHook from "../examples/Header-hooks.js"
import HeaderStaticComp from "../examples/Header-static-comp.js"
import Layout from "../components/Layout.js"
import { graphql } from "gatsby"

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      <h1>examples page</h1>
      <HeaderStaticComp />
      <div>
        this is out person
        <h4>namer: {name}</h4>
        <h4>age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        johnauthor: author
        description
        title
        person: data {
          name: name
          age: age
        }
      }
    }
  }
`

export default examples

import React from "react"
import Layout from "../components/Layout.js"
import Tours from "../components/tours/Tours"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  return (
    <Layout>
      <h1>Our tour</h1>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tours: allContentfulTourExample {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours

import React from "react"
import HeaderHook from "../examples/Header-hooks.js"
import HeaderStaticComp from "../examples/Header-static-comp.js"
import Layout from "../components/Layout.js"

const examples = () => {
  return (
    <Layout>
      <h1>examples page</h1>
      <HeaderStaticComp />
    </Layout>
  )
}

export default examples

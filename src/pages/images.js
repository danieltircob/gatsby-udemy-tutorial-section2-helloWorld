import React, { Component } from "react"
import Layout from "../components/Layout"
import style from "../components/blog.module.css"
import Images from "../examples/Images.js"

export default class images extends Component {
  render() {
    return (
      <Layout>
        <h1 className={style.title}>Images page</h1>
        <Images />
      </Layout>
    )
  }
}

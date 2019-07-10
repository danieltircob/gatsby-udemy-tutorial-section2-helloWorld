import React, { Component } from "react"
import Layout from "../components/Layout"
import style from "../components/blog.module.css"

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <h1 className={style.title}>Blog page</h1>
      </Layout>
    )
  }
}

import React, { Component } from "react"
import Layout from "../components/Layout"
import style from "../components/blog.module.css"

export default class images extends Component {
  render() {
    return (
      <Layout>
        <h1 className={style.title}>Images page</h1>
        <div className="container">
          <div className="row">
            <div className="col">test</div>
            <div className="col">test</div>
            <div className="col">test</div>
          </div>
        </div>
      </Layout>
    )
  }
}

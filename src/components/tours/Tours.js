import React from "react"
import SingleTour from "./SingleTour.js"
import styles from "../../css/items.module.css"

const Tours = ({ tours }) => {
  console.log(tours)
  return (
    <section className={styles.tours}>
      <h2>Our tour</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <SingleTour key={node.id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default Tours

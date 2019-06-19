import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5 contact">
      <div className="container">
        <Title title="Our Website Is Coming Soon!" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Subscribe to our newsletter for the latest news on how to save
              money in Miami.
            </p>
            <Link to="/contact/">
              <button className="btin text-uppercase">contact us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

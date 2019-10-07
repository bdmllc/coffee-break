import React from "react"

import Title from "../Globals/Title"

export default function Testimonial() {
  return (
    <section className="pt-1 ">
      <div className="container">
        <Title
          // title="Our Website Is Coming Soon!"
          style={{ minHeight: "100%" }}
        />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead  mb-5 testimonial-font ">
              "Thanks to T.O.M., we saved hundreds of euros on our last trip to
              Miami!"
              <br />
              <br />- Giselle B.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

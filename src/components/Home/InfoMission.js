import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function InfoMission() {
  return (
    <section className="py-1 ">
      <div className="container">
        <Title title="our mission" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <h5 className=" my-3">
              Tour-O-Miami strives to help tourists and locals save money on
              dining, entertainment and transportation.
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}

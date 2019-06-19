import React, { Component } from "react"
import Title from "../Globals/Title"
import { FaUtensils, FaBeer, FaBus } from "react-icons/fa"
import { Link } from "gatsby"

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUtensils />,
        title: "restuarants",
        info: "Affordable dining options that only locals know about.",
      },
      {
        icon: <FaBeer />,
        title: "bars",
        info:
          "Where to find the best happy hours and deals on beer, wine and spirits.",
      },
      {
        icon: <FaBus />,
        title: "transportation",
        info: "Tips on getting around Miami using public transportation.",
      },
    ],
  }
  render() {
    return (
      <section className="services">
        {/* <Title title="services" /> */}
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <Link to="/food/">
                  <span>{item.icon}</span>
                </Link>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      cuisineItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { cuisineItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { cuisineItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <div className="container">
          <section className="contact-form py-5 mx-auto">
            <Title title="best meal deals" />
            {/* {categories} */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-width btn-contact text-capitalize m-2"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
          {/* {items} */}
          <div className="row" />
          {this.state.cuisineItems.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
              >
                <div className="card" style={{ minWidth: "100%" }}>
                  {typeof node.image.fluid !== "undefined" && (
                    <Img fluid={node.image.fluid} className="card-img-top" />
                  )}
                  {/* item text */}
<<<<<<< HEAD
                  <div className="menu-css px-3">
                    <div className="menu-css">
                      <h6 className="mb-0">{node.title}</h6>
                      <br />
                      <h6 className="mb-0 text-yellow">${node.price}</h6>
                    </div>
=======
                  <div className="card-body text-center">
                    <h6 className="mb-0">{node.title}</h6>
                    <br />
                    <h6 className="mb-0 text-green">
                      <strong>${node.price}</strong>
                    </h6>

>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
                    {/* <p className=" text-muted">
                      <small>{node.description.description}</small>
                    </p> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best Meal Deals" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

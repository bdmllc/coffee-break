import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

<<<<<<< HEAD
=======
const getCategories = drinks => {
  let tempDrinks = drinks.map(drinks => {
    return drinks.node.category
  })
  let tempCategories = new Set(tempDrinks)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
export default class DrinksMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drinks: props.drinks.edges,
      drinksItems: props.drinks.edges,
<<<<<<< HEAD
    }
  }

  render() {
    if (this.state.drinks.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our drinks" />
            {/* categories */}
            {/* items */}
            <div className="row ">
              {this.state.drinksItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 text-yellow">${node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
=======
      categories: getCategories(props.drinks.edges),
    }
  }
  handleDrinks = category => {
    let tempDrinks = [...this.state.drinks]
    if (category === "all") {
      this.setState(() => {
        return { drinksItems: tempDrinks }
      })
    } else {
      let drinks = tempDrinks.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { drinksItems: drinks }
      })
    }
  }
  render() {
    if (this.state.drinks.length > 0) {
      return (
        <div className="container">
          <section className="contact-form py-5 mx-auto">
            <Title title="favorite libations" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-width btn-contact text-capitalize m-2"
                      onClick={() => {
                        this.handleDrinks(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
          {/* items */}
          <div className="row ">
            {this.state.drinksItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                >
                  <div className="card" style={{ minWidth: "100%" }}>
                    {typeof node.image.fluid !== "undefined" && (
                      <Img fluid={node.image.fluid} className="card-img-top" />
                    )}

                    <div className="card-body text-center">
                      {/* item text */}

                      <h6 className="mb-0">{node.title}</h6>
                      <br />
                      <h6 className="mb-0 text-green">
                        <strong>${node.price}</strong>
                      </h6>
                    </div>
                    {/* <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <section className="menu pt-5">
>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
          <div className="container">
            <Title title="Drinks" />
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

import React from "react"
import { Link, graphql } from "gatsby"
import Title from "../components/Globals/Title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

import DrinksMenu from "../components/Home/DrinksMenu"

const DrinksPage = ({ data }) => (
  <Layout>
    <SEO title="Drinks | Affordable Drinking Options In Miami: 2019" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Drinks"
      styleClass="drinks"
    />

    <DrinksMenu drinks={data.drinks} />
    <section className="py-5">
      <div className="container">
        <Title title="drinks" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Check out our list of affordable drinking establishments and Happy
              Hours in Miami.
            </p>
            <Link to="/contact/">
              <button className="btn btn-contact text-uppercase">
                contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "drinks.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    drinks: allContentfulDrinksItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default DrinksPage

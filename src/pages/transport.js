import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Services from "../components/Home/Services"
import Title from "../components/Globals/Title"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Transportation | Getting around Miami on the Cheap: 2019" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="transport"
      styleClass="default-background"
    />
    <section className="py-5">
      <div className="container">
        <Title title="transportation" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              TOUR-O-MIAMI is your best source for tips on how to use Miami's
              public transportation service to get to where you want, when you
              want.
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
    img: file(relativePath: { eq: "tom-transport-hero-pic.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

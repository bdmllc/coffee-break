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
    <SEO title="About Us | We're on a mission to save you money while in Miami" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <section className="py-5">
      <div className="container">
        <Title title="about us" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              We're a vibrant group of millenials driven to mold a new and more
              sustanable world for ourselves and future the generations to come.
              We hope our new website provides tourists and locals alike the
              tools to better experience Miami for less.
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
    img: file(relativePath: { eq: "about.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

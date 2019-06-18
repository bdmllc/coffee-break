import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Services from "../components/Home/Services"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Transportation | Getting around Miami on the Cheap: 2019" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="transport"
      styleClass="default-background"
    />
    <Info />
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

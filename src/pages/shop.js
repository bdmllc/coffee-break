import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Products from "../components/Home/Products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Drinks | Affordable Drinking Options In Miami: 2019" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Drinks"
      styleClass="drinks"
    />
    <Products />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

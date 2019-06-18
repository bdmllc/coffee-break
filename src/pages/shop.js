import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Products from "../components/Home/Products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Shop | New Tour-O-Miami Shirts and Hoodies" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="shop"
      styleClass="default-background"
    />
    <Products />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "tom-shop-hero-pic.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

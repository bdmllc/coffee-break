import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Services from "../components/Home/Services"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Restaurants | Affordable Eats In Miami: 2019" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="eats"
      styleClass="default-background"
    />
    <Menu items={data.menu} />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "munchies.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCuisineItem {
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
            fixed(width: 215, height: 215) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
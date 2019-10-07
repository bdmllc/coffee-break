import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const FoodPage = ({ data }) => (
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
<<<<<<< HEAD
            fixed(width: 175) {
              ...GatsbyContentfulFixed_tracedSVG
=======
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
            }
          }
        }
      }
    }
  }
`

export default FoodPage

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Services from "../components/Home/Services"
import Gallery from "../components/Home/Gallery"
import DrinksMenu from "../components/Home/DrinksMenu"
import Testimonial from "../components/Home/Testimonial"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="welcome to miami"
      styleClass="default-background"
    />
    <Services />
    <BackgroundSection
      img={data.img2.childImageSharp.fluid}
      title="Testimonial"
      styleClass="testimonial-background"
    >
      <Testimonial />
    </BackgroundSection>
    <DrinksMenu drinks={data.drinks} />
    <Testimonial />

    {/* <Info styleClass="contact" /> */}
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
    img2: file(relativePath: { eq: "beach-sunset-cropped.jpeg" }) {
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
            fixed(width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
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

export default IndexPage

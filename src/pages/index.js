import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Services from "../components/Home/Services"
import Gallery from "../components/Home/Gallery"
<<<<<<< HEAD
import DrinksMenu from "../components/Home/DrinksMenu"
=======
import Testimonial from "../components/Home/Testimonial"
import Title from "../components/Globals/Title"
import InfoMission from "../components/Home/InfoMission"
import Counter from "../components/counter"
>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640

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
      title="Our Mission"
      styleClass="testimonial-background-2"
    >
      <InfoMission />
    </BackgroundSection>
    <Gallery />
<<<<<<< HEAD
    <DrinksMenu drinks={data.drinks} />
=======
    <BackgroundSection
      img={data.img3.childImageSharp.fluid}
      title="Tour-O-Miami Testimonial"
      styleClass="testimonial-background"
    >
      <Testimonial />
    </BackgroundSection>
    <Counter />

>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
    {/* <Info styleClass="contact" /> */}
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "tom-default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
<<<<<<< HEAD
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
=======
    img2: file(relativePath: { eq: "beach-shore.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "Giselle-Badeux.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
>>>>>>> b26895350f579528f8bae169cd93f95c47d8c640
        }
      }
    }
  }
`

export default IndexPage

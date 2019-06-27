import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Services from "../components/Home/Services"
import Gallery from "../components/Home/Gallery"
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
    <Gallery />
    <BackgroundSection
      img={data.img2.childImageSharp.fluid}
      title="Testimonial"
      styleClass="testimonial-background"
    >
      <Testimonial />
    </BackgroundSection>

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
  }
`

export default IndexPage

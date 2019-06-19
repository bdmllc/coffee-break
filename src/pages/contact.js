import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Services from "../components/Home/Services"
import ContactForm from "../components/Home/ContactForm"
import Title from "../components/Globals/Title"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us | Please contact us if you know of any great deals on food and beverage in Miami. " />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="contact us"
      styleClass="default-background"
    />
    <section className="pt-5">
      <div className="container">
        <Title title="contact us" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center" />
        </div>
      </div>
    </section>
    <ContactForm />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

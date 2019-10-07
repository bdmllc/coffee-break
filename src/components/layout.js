import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "../components/Globals/Footer"

import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

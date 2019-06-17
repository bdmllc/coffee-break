import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/tour-o-miami-logo-new22.svg"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/food",
        text: "food",
      },
      {
        id: 3,
        path: "/drinks",
        text: "drinks",
      },
      {
        id: 4,
        path: "/transport",
        text: "transport",
      },
      {
        id: 5,
        path: "/about",
        text: "about",
      },
      {
        id: 6,
        path: "/contact",
        text: "contact",
      },
      {
        id: 7,
        path: "/shop",
        text: "shop",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="95%" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

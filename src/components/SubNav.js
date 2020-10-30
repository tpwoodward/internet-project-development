import React from "react"
import logo from "../logo.svg"

import { Link } from "react-router-dom"

function SubNav() {
  return (
    <nav>
      <div className="container mw-100 fixed-top">
        <div className="row">
          <div className="col-{breakpoint}-auto">
            <Link className="navbar-brand" to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="col"></div>
          <div className="col-{breakpoint}-auto">
            <nav className="navbar">
              <Link className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>
                Return
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SubNav

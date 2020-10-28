import React from "react"
import logo from "../logo.svg"

function SubNav() {
  return (
    <nav>
      <div className="container mw-100 fixed-top">
        <div className="row">
          <div className="col-{breakpoint}-auto">
            <a className="navbar-brand" href="/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>
          <div className="col"></div>
          <div className="col-{breakpoint}-auto">
            <nav className="navbar">
              <a className="nav-link" href="/">
                Return
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SubNav

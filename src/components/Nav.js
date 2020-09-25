import React from "react"
import logo from "../logo.svg"

function Nav() {
  return (
    <nav>
      <div className="container mw-100 fixed-top">
        <div className="row">
          <div className="col-{breakpoint}-auto">
            <a className="navbar-brand" id="nav-left" href="/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>
          <div className="col"></div>
          <div className="col-{breakpoint}-auto">
            <nav className="navbar" id="nav-right">
              <a className="nav-link text-dark" href="#articles">
                Articles
              </a>
              <a className="nav-link text-dark" href="#your-health">
                Your Health
              </a>
              <a className="nav-link text-dark" href="#help">
                Help
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

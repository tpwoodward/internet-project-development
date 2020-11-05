import React from "react"

// import The Health Lab's svg logo
import logo from "../logo.svg"

// import the Link element from React Router
import { Link } from "react-router-dom"

// content for the main screen's navigation memu, using React Bootstrap classes
function Nav() {
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
              <a className="nav-link" href="#articles">
                Articles
              </a>
              <a className="nav-link" href="#your-health">
                Your Health
              </a>
              <a className="nav-link" href="#help">
                Help
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

// export the functional component for the main nav
export default Nav

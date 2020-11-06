import React from "react"

// import The Health Lab's svg logo
import logo from "../logo.svg"

// import the Link element from React Router
import { Link } from "react-router-dom"

// content for article pages' navigation memu, using React Bootstrap classes
function SubNav() {
  return (
    <nav>
      <div className="container mw-100 fixed-top">
        <div className="row">
          <div className="col-{breakpoint}-auto">
            <Link className="navbar-brand sub" to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="col"></div>
          <div className="col-{breakpoint}-auto">
            <nav className="navbar sub">
              <Link className="nav-link" to="/">
                Return
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

// export the functional component for the secondary nav
export default SubNav

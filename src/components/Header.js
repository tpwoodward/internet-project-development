import React from "react"
import logo from "../logo.svg"

function Header() {
  return (
    <header className="App-header">
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

      <div id="intro-full">
        <h1 className="display-1">Passion for Health</h1>
        <div className="intro">
          <p>
            At Passion for Health, we prioritise education. We want you to know
            how you're holding up and what your next fitness goals can be!
          </p>
          <p>
            Feel free to use our BMI and calorie requirement calculators, along
            with reading some of our educational articles.
          </p>
        </div>
        <div className="intro2">
          <a href="#your-health" className="text-dark">
            Calculate your health
          </a>
        </div>
        <div className="intro2">
          <a href="#articles" className="text-dark">
            Read helpful articles
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

import React from "react"
import Nav from "./Nav"

function Header() {
  return (
    <header className="App-header">
      <Nav />
      <div id="intro-full">
          <h1 style={{ marginLeft: 50 + "px" }}>
            Passion for Health
          </h1>
        <div className="intro text-white">
          <p>
            At Passion for Health, we prioritise education. We want you to know
            how you're holding up and what your next fitness goals can be!
          </p>
          <p>
            Feel free to use our BMI and calorie requirement calculators, along
            with reading some of our educational articles.
          </p>
        </div>
            <a href="#your-health" className="nav-link text-dark intro2">
              Calculate your health
            </a>
            <a href="#articles" className="nav-link text-dark intro2">
              Read helpful articles
            </a>
      </div>
    </header>
  )
}

export default Header

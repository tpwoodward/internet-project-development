import React from "react"
import Nav from "./Nav"
import { Parallax } from "react-scroll-parallax"

function Header() {
  return (
    <header className="App-header">
      <Nav />

      <div id="intro-full">
        <Parallax className="scrolling-section" y={[60, -50]}>
          <h1 className="display-1" style={{ marginLeft: 50 + "px" }}>
            Passion for Health
          </h1>
        </Parallax>
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
        <Parallax className="scrolling-section" y={[-50, 100]}>
            <a className="nav-link text-dark intro2">
              Calculate your health
            </a>
        </Parallax>
        <Parallax className="scrolling-section" y={[-50, 200]}>
            <a className="nav-link text-dark intro2">
              Read helpful articles
            </a>
        </Parallax>
      </div>
    </header>
  )
}

export default Header

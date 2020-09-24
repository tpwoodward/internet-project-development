import React from "react"
import Nav from "./Nav"

function Header() {
  return (
    <header className="App-header">
      <Nav />

      <div id="intro-full">
        <h1 className="display-1" style={{marginLeft: 50 + 'px'}}>Passion for Health</h1>
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

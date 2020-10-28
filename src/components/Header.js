import React from "react"

function Header() {
  return (
    <div id="header">
      <div className="inner">
          <h1 style={{ marginLeft: 50 + "px" }}>
            The Health Lab
          </h1>
        <div>
          <p>
            At The Health Lab, we prioritise education. We want you to know
            how you're holding up and what your next fitness goals can be!
          </p>
          <p>
            Feel free to use our BMI and calorie requirement calculators, along
            with reading some of our educational articles.
          </p>
        </div>
            <a href="#your-health" className="intro2">
              <p>Calculate your health</p>
            </a>
            <a href="#articles" className="intro2">
              <p>Read helpful articles</p>
            </a>
      </div>
    </div>
  )
}

export default Header

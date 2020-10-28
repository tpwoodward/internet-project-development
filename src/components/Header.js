import React from "react"

import { BiCalculator, BiBookOpen } from "react-icons/bi"

function Header() {
  return (
    <div id="header">
      <div className="inner">
        <h1 style={{ marginLeft: 50 + "px" }}>The Health Lab</h1>
        <div>
          <h3>Your health made easy</h3>
        </div>
        <a href="#your-health" className="button mainBtn">
          <BiCalculator className="btnIcon" />
          Calculate your health
        </a>
        <a href="#articles" className="button mainBtn">
          <BiBookOpen className="btnIcon" />
          Read helpful articles
        </a>
      </div>
    </div>
  )
}

export default Header

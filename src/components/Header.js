import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiCalculator, BiBookOpen } from "react-icons/bi"
import { VscBeaker } from "react-icons/vsc"


function Header() {
  return (
    <div id="header">
      <div className="inner">
        <Parallax className="scrolling-section" y={[60, -50]}>
          <h1>The Health L<VscBeaker id="beaker"/>b</h1>
        </Parallax>
        <Parallax className="scrolling-section" y={[-50, 100]}>
          <h3>Your health made easy</h3>
        </Parallax>
        <Parallax className="scrolling-section" y={[-50, 100]}>
        <a href="#your-health" className="button mainBtn">
          <BiCalculator className="btnIcon" />
          Calculate your health
        </a>
        <a href="#articles" className="button">
          <BiBookOpen className="btnIcon" />
          Read helpful articles
        </a>
        </Parallax>
      </div>
    </div>
  )
}

export default Header

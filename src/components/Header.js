import React from "react"

// import parallax functionality
import { Parallax } from "react-scroll-parallax"

// import icons from BoxIcons, through React Icons
import { BiCalculator, BiBookOpen } from "react-icons/bi"

// functional component containing header content
function Header() {
  return (
    <header id="header" className="text-center">
      <Parallax className="scrolling-section" y={[60, -50]}>
        <img
          className="logoImg"
          src="wordmark.svg"
          alt="The Health Lab wordmark"
        />
      </Parallax>
      <Parallax className="scrolling-section" y={[-50, 100]}>
        <h3>Your health made easy</h3>
      </Parallax>
      <Parallax className="scrolling-section" y={[-50, 100]}>
        <a href="#your-health" className="button mainBtn rightBtn">
          <BiCalculator className="btnIcon" />
          Calculate Your Health
        </a>
        <a href="#articles" className="button leftBtn">
          <BiBookOpen className="btnIcon" />
          Read Helpful Articles
        </a>
      </Parallax>
    </header>
  )
}

// export the functional component
export default Header

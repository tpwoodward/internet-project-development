import React from "react"
import { Parallax } from "react-scroll-parallax"

import { FaArrowRight } from "react-icons/fa"

function Health() {
  return (
    <div>
      <Parallax className="scrolling-section" y={[-50, 0]}>
        <div id="your-health">
          <h1 className="display-1">Your Health</h1>
          <div className="subsectionbtn text-right">
            <a href="/health-calc" className="arrow text-white">
              <FaArrowRight />
            </a>
            <p>Calculate Health</p>
          </div>
        </div>
      </Parallax>
      <Parallax className="scrolling-section" x={[0, -50]}>
        <h1>Your Health animated</h1>
      </Parallax>
    </div>
  )
}

export default Health
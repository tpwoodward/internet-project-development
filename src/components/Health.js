import React from "react"
import { Parallax } from "react-scroll-parallax"
import { FaArrowRight } from "react-icons/fa"

function Health() {
  return (
    <div>
      <div id="your-health">
        <div className="Inner">
          <Parallax className="scrolling-section" y={[200, -200]}>
            <h1 className="display-1">Your Health</h1>
          </Parallax>
          <div className="subsectionbtn text-right">
            <a href="/health-calc" className="arrow text-white">
              <FaArrowRight />
            </a>
            <p>Calculate Health</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Health

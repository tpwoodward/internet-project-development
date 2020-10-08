import React from "react"
import { Parallax } from "react-scroll-parallax"
import { BiCalculator } from "react-icons/bi"

function Health() {
  return (
    <div>
      <div id="your-health">
        <div className="Inner">
          <Parallax className="scrolling-section" y={[200, -200]}>
            <h1 className="display-1">Your Health</h1>
            <div className="text-right">
            <a href="/health-calc" className="text-white">
              <BiCalculator className="arrow"/>
              <p>Calculate Health</p>
            </a>
          </div>
          </Parallax>
          
        </div>
      </div>
    </div>
  )
}

export default Health

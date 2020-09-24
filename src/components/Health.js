import React from "react"

import { FaArrowRight } from "react-icons/fa"

function Health() {
  return (
    <div>
      <div id="your-health">
        <div className="Inner">
          <h1 className="display-1">Your Health</h1>
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

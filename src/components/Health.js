import React from "react"
import { FaArrowRight } from "react-icons/fa"

function Health() {
  return (
    <div>
      <div id="your-health">
        <div className="Inner">
            <h1 className="display-1">Your Health</h1>
          <div className="text-right">
            <a href="/health-calc" className="text-white">
              <FaArrowRight className="arrow"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Health

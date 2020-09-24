import React from "react"
import { Parallax } from "react-scroll-parallax"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

function Help() {
  return (
    <div id="help">
      <div className="Inner">
        <div className="container mw-100">
          <div className="row">
            <div className="col subsectionbtn text-left">
              <a href="/faq" className="arrow text-white">
                <FaArrowLeft />
              </a>
              <p>FAQ</p>
            </div>
            <div className="col subsectionbtn text-right">
              <a href="/contact" className="arrow text-white">
                <FaArrowRight />
              </a>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <Parallax className="scrolling-section" x={[100, -105]}>
          <h1 className="display-1 text-right">Help</h1>
        </Parallax>
      </div>
    </div>
  )
}

export default Help

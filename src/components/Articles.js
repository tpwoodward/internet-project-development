import React from "react"
import { Parallax } from "react-scroll-parallax"

import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"

function Articles() {
  return (
    <div>
      <Parallax className="scrolling-section" y={[0, -50]}>
        <div id="articles">
          <div className="container mw-100">
            <div className="row">
              <div className="col subsectionbtn text-left">
                <a href="/hiit-vs-liss" className="arrow text-white">
                  <FaArrowLeft />
                </a>
                <p>HIIT vs LISS</p>
              </div>
              <div className="col subsectionbtn text-right">
                <a href="/what-are-macros" className="arrow text-white">
                  <FaArrowRight />
                </a>
                <p>What are Macros?</p>
              </div>
            </div>
          </div>
          <h1 className="display-1 text-right">Articles</h1>
        </div>
      </Parallax>
    </div>
  )
}

export default Articles

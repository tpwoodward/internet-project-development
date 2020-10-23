import React from "react"
import Nav from "./Nav"

import { FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Articles() {
  return (
    <div>
      <Nav />
      <div id="articles">
        <div className="Inner">
            <h1 className="display-1 text-left">Articles</h1>
          <div className="container-fluid">
              <div className="row">
                <div className="col text-left">
                  <a href="/hiit-vs-liss" className="text-white">
                    <FaArrowLeft className="arrow" />
                  </a>
                </div>
                <div className="col text-right">
                  <a href="/what-are-macros" className="text-white">
                    <FaArrowRight className="arrow" />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Articles

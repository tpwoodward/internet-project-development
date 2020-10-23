import React from "react"
import { FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Help() {
  return (
    <div id="help">
      <div className="Inner">
          <h1 className="display-1 text-left">Help</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-left">
              <a href="/faq" className="text-white">
                <FaArrowLeft className="arrow" />
              </a>
            </div>
            <div className="col text-right">
              <a href="/contact" className="text-white">
                <FaArrowRight className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

import React from "react"
import { FaArrowRight} from "react-icons/fa"

function Help() {
  return (
    <div id="help">
      <div className="Inner">
          <h1 className="display-1">Help</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-right">
              <a href="/faq" className="text-white">
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

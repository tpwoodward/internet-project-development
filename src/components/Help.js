import React from "react"
import Nav from "./Nav"

function Help() {
  return (
      <Nav />,
      <div id="help">
      <div className="Inner">
        <h1 className="display-2">Help</h1>
        <div className="container mw-100">
          <div className="row">
            <div className="col">
              <p className="question">Question</p>
            </div>
            <div className="col">
              <p className="question">Question</p>
            </div>
            <div className="col">
              <p className="question">Question</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="question">Question</p>
            </div>
            <div className="col">
              <p className="question">Question</p>
            </div>
            <div className="col">
              <p className="question">Question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

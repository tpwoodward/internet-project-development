import React from "react"
import Nav from "./Nav"

function Help() {
  return (
    <div className="Help">
      <Nav />,
      <div className="Inner">
        <h1 className="display-2">Frequently Asked Questions</h1>
        <div className="container mw-100">
          <div className="row">
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
            <div className="col">
              <p className="question">Question</p>
              <p className="answer">
                Answer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

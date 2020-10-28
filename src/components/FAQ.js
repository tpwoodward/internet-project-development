import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import Nav from "./Nav"

function FAQ() {
  return (
    <div className="Help">
      <Nav />,
      <div className="Inner">
        <h1 className="display-2">Frequently Asked Questions</h1>
        <a href="/" className="arrow text-white">
          <FaArrowLeft />
        </a>
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

export default FAQ

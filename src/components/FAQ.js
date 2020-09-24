import React from "react"
import { FaArrowRight } from "react-icons/fa"

function FAQ() {
  return (
    <div className="Help">
      <div className="Inner">
        <div className="container mw-100">
          <div className="row">
            <div className="col">
              <h1 className="display-2">FAQ</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-2 subsectionbtn text-right">
              <a href="/" className="arrow text-white">
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ

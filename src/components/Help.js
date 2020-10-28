import React from "react"
import { BiRightArrowAlt } from "react-icons/bi"
import Dropdown from 'react-bootstrap/Dropdown'


function Help() {
  return (
    <div id="help">
      <div className="Inner">
        <h1 className="display-2">Help</h1>
        <div className="container mw-100">
          <div className="row">
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>
            </div>
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>{" "}
            </div>
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>{" "}
            </div>
            <div className="col">
              <a className="button questionBtn">
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

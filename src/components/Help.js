import React from "react"
import { Parallax }  from "react-scroll-parallax"

import { BiRightArrowAlt } from "react-icons/bi"
import Dropdown from 'react-bootstrap/Dropdown'


function Help() {
  return (
    <div id="help">
      <div className="Inner">
      <Parallax className="scrolling-section" y={[-75, 18.75]}>
        <h1 className="display-2">Help</h1>
      </Parallax>
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

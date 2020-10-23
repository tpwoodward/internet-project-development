import React from "react"
import { Parallax } from "react-scroll-parallax"
import { BiQuestionMark } from "react-icons/bi"
import { BiSend } from "react-icons/bi"

function Help() {
  return (
    <div id="help">
      <div className="Inner">
        
        <Parallax className="scrolling-section" y={[-50, 100]}>
          <h1 className="display-1 text-center">Help</h1>
          <div className="container-fluid">
          <div className="row">
            <div className="col text-left">
              <a className="text-white">
                <BiQuestionMark className="arrow"/>
                <p>FAQ</p>
              </a>
            </div>
            <div className="col text-right">
              <a className="text-white">
                <BiSend className="arrow"/>
                <p>Contact</p>
              </a>
            </div>
          </div>
        </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Help

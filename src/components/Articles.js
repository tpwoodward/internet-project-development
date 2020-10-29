import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiRun, BiFoodMenu } from "react-icons/bi"
import { VscBeaker } from "react-icons/vsc"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Articles() {
  return (

          <div id="articles">
            <div className="inner">
              <Parallax className="scrolling-section" y={[-100, 25]}>
                <h1 className="display-1 text-white">Articles</h1>
              </Parallax>
              <a href="/hiit-vs-liss" className="button mainBtn">
                <BiRun className="btnIcon" />
                HIIT vs LISS
              </a>
              <a href="/what-are-macros" className="button mainBtn">
                <BiFoodMenu className="btnIcon" />
                What are macros?
              </a>
            </div>
          </div>
  )
}

export default Articles

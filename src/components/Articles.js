import React from "react"
import Nav from "./Nav"

import { Parallax } from "react-scroll-parallax"

import { BiRun } from "react-icons/bi"
import { BiRestaurant } from "react-icons/bi"

function Articles() {
  return (
    <div>
      <Nav />
      <div id="articles">
        <div className="Inner">
          <Parallax className="scrolling-section" x={[10, -10]}>
            <h1 className="display-1 text-center">Articles</h1>
            <div className="container-fluid">
              <div className="row">
                <div className="col text-left">
                  <a className="text-white">
                    <BiRun className="arrow" />
                    <p>HIIT vs LISS</p>
                  </a>
                </div>
                <div className="col text-right">
                  <a className="text-white">
                    <BiRestaurant className="arrow" />
                    <p>What are Macros?</p>
                  </a>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default Articles

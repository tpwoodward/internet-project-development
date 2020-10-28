import React from "react"
import Nav from "./Nav"

import { BiRun, BiFoodMenu } from "react-icons/bi"

function Articles() {
  return (
    <div>
      <Nav />
      <div id="articles">
        <div className="Inner">
          <h1 className="display-1">Articles</h1>
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
    </div>
  )
}

export default Articles

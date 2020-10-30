import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiRun, BiFoodMenu } from "react-icons/bi"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Articles() {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col sm>
          <div id="articles">
            <div>
              <Parallax className="scrolling-section" y={[-100, 25]}>
                <h1 className="display-1 text-white">Articles</h1>
              </Parallax>
              <a href="/hiit-vs-liss" className="button articleBtn mainBtn">
                <BiRun className="btnIcon" />
                HIIT vs LISS
              </a>
              <a href="/what-are-macros" className="button articleBtn">
                <BiFoodMenu className="btnIcon" />
                What are macros?
              </a>
            </div>
          </div>
        </Col>
        <Col className="lgSection">
          <Parallax className="scrolling-section" y={[200, 50]}>
          <img className="sectionImg" src="photos/pexels-ella-olsson-1640777.jpg" alt="Runners" />
          </Parallax>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Articles

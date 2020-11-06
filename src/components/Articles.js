import React from "react"

// import parallax functionality
import { Parallax } from "react-scroll-parallax"

// import icons from BoxIcons, through React Icons
import { BiRun, BiFoodMenu } from "react-icons/bi"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// import the Link element from React Router
import { Link } from "react-router-dom"

// functional component containing content for the Articles segment of the main screen
function Articles() {
  return (
    <div>
      <Container fluid className="mainContainer">
        <Row>
          <Col sm className="tight">
            <div id="articles">
              <div>
                <Parallax className="scrolling-section" y={[-100, 15]}>
                  <h1 className="display-1 text-white">Articles</h1>
                </Parallax>
                <p className="btnCaption2">
                  View these introductory articles and get started on your
                  fitness journey!
                </p>
                <Link
                  to="/hiit-vs-liss"
                  className="button articleBtn"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <BiRun className="btnIcon" />
                  HIIT vs LISS
                </Link>
                <br />
                <Link
                  to="/what-are-macros"
                  className="button articleBtn"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <BiFoodMenu className="btnIcon" />
                  Macros 101
                </Link>
              </div>
            </div>
          </Col>
          <Col className="lgSection tight">
            <img
              className="sectionImg"
              src="photos/pexels-ella-olsson-1640777.jpg"
              alt="Food shot sourced from Pexels"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

// export the functional component
export default Articles

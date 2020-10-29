import React from "react"
import { Parallax } from "react-scroll-parallax"

import Modal from "react-bootstrap/Modal"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BiRightArrowAlt } from "react-icons/bi"

function Help() {
  const [ModalShow, setModalShow] = React.useState(false)

  return (
    <div id="help">
      <div className="Inner">
        <Parallax className="scrolling-section" y={[-75, 18.75]}>
          <h1 className="display-2">Help</h1>
        </Parallax>
        <Container fluid>
          <Row>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>
              <Modal
                show={ModalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="modal-content">
                  {" "}
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Question
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Modal.Body>
                </div>
              </Modal>
            </Col>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>{" "}
            </Col>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>{" "}
            </Col>
            <Col sm>
              <button
                onClick={() => setModalShow(true)}
                className="button questionBtn"
              >
                Question
                <BiRightArrowAlt className="btnIconRight" />
              </button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Help

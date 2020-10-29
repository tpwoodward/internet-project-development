import React from "react"
import { Parallax } from "react-scroll-parallax"

import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BiInfoCircle } from "react-icons/bi"

function Help() {
  const [Modal1Show, setModal1Show] = React.useState(false)
  const [Modal2Show, setModal2Show] = React.useState(false)
  const [Modal3Show, setModal3Show] = React.useState(false)
  const [Modal4Show, setModal4Show] = React.useState(false)

  return (
    <Container fluid>
      <Row>
        <Col sm>
          <div id="help">
            <div className="Inner">
              <Parallax className="scrolling-section" y={[-75, 18.75]}>
                <h1 className="display-2 text-white">Help</h1>
              </Parallax>
              <Container fluid>
                <Row>
                  <button
                    onClick={() => setModal1Show(true)}
                    className="button questionBtn"
                  >
                    <BiInfoCircle className="btnIcon" />
                    How much should I exercise?
                  </button>
                </Row>
                <Row>
                  <button
                    onClick={() => setModal3Show(true)}
                    className="button questionBtn"
                  >
                    <BiInfoCircle className="btnIcon" />
                    What is a cut vs bulk?
                  </button>
                </Row>
                <Row>
                  <button
                    onClick={() => setModal2Show(true)}
                    className="button questionBtn"
                  >
                    <BiInfoCircle className="btnIcon" />
                    How do I lose weight?
                  </button>
                </Row>
                <Row>
                  <button
                    onClick={() => setModal4Show(true)}
                    className="button questionBtn"
                  >
                    <BiInfoCircle className="btnIcon" />
                    How do I build muscle?
                  </button>
                </Row>
              </Container>

              <Modal
                show={Modal1Show}
                onHide={() => setModal1Show(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="modal-content">
                  {" "}
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      How much should I exercise?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="answer">
                    <p>
                      As a general goal, aim for at least 30 minutes of moderate
                      physical activity every day. If you want to lose weight,
                      maintain weight loss or meet specific fitness goals, you
                      may need to exercise more. Want to aim even higher? You
                      can achieve more health benefits if you ramp up your
                      exercise to 300 minutes or more a week.
                    </p>
                    <p>
                      Short on long chunks of time? Even brief bouts of activity
                      offer benefits. For instance, if you can't fit in one
                      30-minute walk during the day, try a few five-minute walks
                      instead. Any activity is better than none at all. What's
                      most important is making regular physical activity part of
                      your lifestyle.
                    </p>
                    <p className="reference">
                      {" "}
                      Laskowski, Edward. 2019. "How much should the average
                      adult exercise every day?" Mayo Clinic.{" "}
                      <a className="link" href="https://tinyurl.com/yy4k3525">
                        https://tinyurl.com/y9j9okn3
                      </a>
                    </p>
                  </Modal.Body>
                </div>
              </Modal>

              <Modal
                show={Modal2Show}
                onHide={() => setModal2Show(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="modal-content">
                  {" "}
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      How do I lose weight?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="answer">
                    <p>
                      Your weight is a balancing act, but the equation is
                      simple: If you eat more calories than you burn, you gain
                      weight. And if you eat fewer calories and burn more
                      calories through physical activity, you lose weight.
                    </p>
                    <p>
                      Skipping one or two high-calorie items is a good place to
                      start when cutting calories. For example, you could skip
                      your morning latte, soda at lunch or that bowl of ice
                      cream you always have after dinner. Think about what you
                      eat and drink each day and identify items you could cut
                      out. If you think that skipping your indulgence will leave
                      you with a craving, try a low-calorie substitution.{" "}
                    </p>
                    <p className="reference">
                      {" "}
                      Mayo Clinic Staff. 2020. "Counting calories: Get back to
                      weight-loss basics." Mayo Clinic.{" "}
                      <a className="link" href="https://tinyurl.com/yy4k3525">
                        https://tinyurl.com/yd8gkm2f
                      </a>
                    </p>
                  </Modal.Body>
                </div>
              </Modal>

              <Modal
                show={Modal3Show}
                onHide={() => setModal3Show(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="modal-content">
                  {" "}
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      What is a cut vs bulk?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="answer">
                    <p>
                      Bulking means that you're purposely trying to gain weight
                      (preferably muscle) and are therefore eating at a caloric
                      surplus. Cutting means that you're purposely trying to
                      lose weight (preferably fat) and are therefore eating at a
                      caloric deficit (and probably doing more cardio).
                    </p>
                    <p>
                      The rate at which you bulk and cut, or how far you let
                      yourself go in terms of increased or decreased bodyweight
                      or bodyfat, are not yet standardized. For example,
                      “bulking” to one person might mean gaining 30 lbs in 6
                      weeks, whereas to another it might mean gaining 6 pounds
                      in 6 weeks.
                    </p>
                    <p className="reference">
                      Contreras, Bret. 2014. "To Bulk And Cut Or Not To Bulk And
                      Cut." The Glute Guy.{" "}
                      <a className="link" href="https://tinyurl.com/yy4k3525">
                        https://tinyurl.com/y58l2c6z
                      </a>
                    </p>
                  </Modal.Body>
                </div>
              </Modal>

              <Modal
                show={Modal4Show}
                onHide={() => setModal4Show(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <div className="modal-content">
                  {" "}
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      How do I build muscle?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="answer">
                    <p>
                      Train with high volume and medium intensity. "Volume" is
                      the quantity of sets and repetitions you do and
                      "intensity" is how much weight you choose. For each weight
                      training exercise set, perform 10 to 15 repetitions with
                      less than a minute break between sets.
                    </p>
                    <p>
                      Train at least three times each week. Three sessions per
                      week is the minimum amount of volume needed to create a
                      muscle-building stimulus. Those with significant strength
                      training experience may attempt more sessions.
                    </p>
                    <p className="reference">
                      Rogers, Paul. 2020. "Top 15 Tips for Building Muscle."
                      Verywell Fit.{" "}
                      <a className="link" href="https://tinyurl.com/yy4k3525">
                        https://tinyurl.com/yy4k3525
                      </a>
                    </p>
                  </Modal.Body>
                </div>
              </Modal>
            </div>
          </div>
        </Col>
        <Col sm>
        <Parallax className="scrolling-section" y={[200, 50]}>
          <img className="sectionImg" src="media/pexels-andrea-piacquadio-3756165.jpg" alt="Runners" />
          </Parallax>
        </Col>
      </Row>
    </Container>
  )
}

export default Help

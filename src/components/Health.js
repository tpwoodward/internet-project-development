import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiBody, BiPieChartAlt2, BiBarChartAlt } from "react-icons/bi"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import BMIModal from "./BMIModal"
import BodyFatModal from "./BodyFatModal"
import CaloriesModal from "./CaloriesModal"

function Health() {
  const [bodyFatModalShow, setBodyFatModalShow] = React.useState(false)
  const [bmiModalShow, setBmiModalShow] = React.useState(false)
  const [caloriesModalShow, setCaloriesModalShow] = React.useState(false)

  return (
    <Container fluid>
      <Row>
        <Col sm>
          <div id="your-health">
              <Parallax className="scrolling-section" y={[20, -80]}>
                <h1 className="display-1">Your Health</h1>
              <Button
                onClick={() => setBmiModalShow(true)}
                bsPrefix="button healthBtn mainCalcBtn"
              >
                <BiBody className="btnIcon" />
                Body Mass Index
              </Button>
              <br />
              <Button
                onClick={() => setBodyFatModalShow(true)}
                bsPrefix="button healthBtn"
              >
                <BiPieChartAlt2 className="btnIcon" />
                Body Fat Percentage
              </Button>
              <br />
              <Button
                onClick={() => setCaloriesModalShow(true)}
                bsPrefix="button healthBtn"
              >
                <BiBarChartAlt className="btnIcon" />
                Calorie Requirements
              </Button>
              </Parallax>

              <BMIModal
                show={bmiModalShow}
                onHide={() => setBmiModalShow(false)}
              />
              <BodyFatModal
                show={bodyFatModalShow}
                onHide={() => setBodyFatModalShow(false)}
              />
              <CaloriesModal
                show={caloriesModalShow}
                onHide={() => setCaloriesModalShow(false)}
              />
          </div>
        </Col>
        <Col sm>
        <Parallax className="scrolling-section" y={[200, 50]}>
          <img className="sectionImgAlt" src="media/pexels-victor-freitas-841130.jpg" alt="Runners" />
          </Parallax>
        </Col>
      </Row>
    </Container>
  )
}

export default Health

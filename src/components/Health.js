import React from "react"

// import parallax functionality
import { Parallax } from "react-scroll-parallax"

// import icons from BoxIcons, through React Icons
import { BiBody, BiPieChartAlt2, BiBarChartAlt } from "react-icons/bi"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// import the functional components created for the modals in Your Health section
import BMIModal from "./BMIModal"
import BodyFatModal from "./BodyFatModal"
import CaloriesModal from "./CaloriesModal"

// functional component containing content for the Your Health segment of the main screen
function Health() {
  // set the three modals to not be shown by default
  const [bodyFatModalShow, setBodyFatModalShow] = React.useState(false)
  const [bmiModalShow, setBmiModalShow] = React.useState(false)
  const [caloriesModalShow, setCaloriesModalShow] = React.useState(false)

  // the content for the Your Health segment, including buttons which trigger modals to be visible
  return (
    <Container fluid>
      <Row>
        <Col sm>
          <div id="your-health">
            <Parallax className="scrolling-section" y={[-100, 25]}>
              <h1 className="display-1">Your Health</h1>
            </Parallax>

            <Button
              onClick={() => setBmiModalShow(true)}
              bsPrefix="button healthBtn mainCalcBtn"
            >
              <BiBody className="btnIcon" />
              Body Mass Index
            </Button>
            <p className="btnCaption">
              Your Body Mass Index (BMI) is based on your height-to-weight ratio. A healthy BMI is between 18 and 25.
            </p>
            <Button
              onClick={() => setBodyFatModalShow(true)}
              bsPrefix="button healthBtn"
            >
              <BiPieChartAlt2 className="btnIcon" />
              Body Fat Percentage
            </Button>
            <p className="btnCaption">
              Calculating body fat percentage describes your body composition.
            </p>
            <Button
              onClick={() => setCaloriesModalShow(true)}
              bsPrefix="button healthBtn"
            >
              <BiBarChartAlt className="btnIcon" />
              Calorie Requirements
            </Button>
            <p className="btnCaption">
                To gain or lose weight, you need to eat above or below your daily caloric requirements.
            </p>
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
        <Col className="lgSection">
          <img
            className="sectionImgAlt"
            src="photos/pexels-victor-freitas-841130.jpg"
            alt="Weightlifting shot sourced from Pexels"
          />
        </Col>
      </Row>
    </Container>
  )
}

// export the functional component
export default Health

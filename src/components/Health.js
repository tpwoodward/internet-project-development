import React from "react"
import { Parallax } from "react-scroll-parallax"

import { BiBody, BiPieChartAlt2, BiBarChartAlt } from "react-icons/bi"
import Button from "react-bootstrap/Button"

import BMIModal from "./BMIModal"
import BodyFatModal from "./BodyFatModal"
import CaloriesModal from "./CaloriesModal"

function Health() {
  const [bodyFatModalShow, setBodyFatModalShow] = React.useState(false)
  const [bmiModalShow, setBmiModalShow] = React.useState(false)
  const [caloriesModalShow, setCaloriesModalShow] = React.useState(false)

  return (
    <div id="your-health">
      <div className="Inner">
        <Parallax className="scrolling-section" y={[-100, 25]}>
          <h1 className="display-1">Your Health</h1>
        </Parallax>
        <Button onClick={() => setBmiModalShow(true)} bsPrefix="button mainBtn">
          <BiBody className="btnIcon" />
          Body Mass Index
        </Button>
        <BMIModal show={bmiModalShow} onHide={() => setBmiModalShow(false)} />
        <Button onClick={() => setBodyFatModalShow(true)} bsPrefix="button">
          <BiPieChartAlt2 className="btnIcon" />
          Body Fat Percentage
        </Button>
        <BodyFatModal
          show={bodyFatModalShow}
          onHide={() => setBodyFatModalShow(false)}
        />
        <Button onClick={() => setCaloriesModalShow(true)} bsPrefix="button">
          <BiBarChartAlt className="btnIcon" />
          Calorie Requirements
        </Button>
        <CaloriesModal
          show={caloriesModalShow}
          onHide={() => setCaloriesModalShow(false)}
        />
      </div>
    </div>
  )
}

export default Health

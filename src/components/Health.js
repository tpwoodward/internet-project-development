import React from "react"
import { Parallax }  from "react-scroll-parallax"

import { BiBody, BiPieChartAlt2, BiBarChartAlt } from "react-icons/bi"

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
              <button onClick={() => setBmiModalShow(true)} className="button mainBtn">
                <BiBody className="btnIcon"/>
                Body Mass Index
              </button>
              <BMIModal
                show={bmiModalShow}
                onHide={() => setBmiModalShow(false)}
              />
              <button onClick={() => setBodyFatModalShow(true)} className="button">
              <BiPieChartAlt2 className="btnIcon"/>
                Body Fat Percentage
              </button>
              <BodyFatModal
                show={bodyFatModalShow}
                onHide={() => setBodyFatModalShow(false)}
              />
              <button onClick={() => setCaloriesModalShow(true)} className="button">
              <BiBarChartAlt className="btnIcon"/>
                Calorie Requirements
              </button>
              <CaloriesModal
                show={caloriesModalShow}
                onHide={() => setCaloriesModalShow(false)}
              />
      </div>
    </div>
  )
}

export default Health

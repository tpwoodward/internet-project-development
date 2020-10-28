import React from "react"

import { BiBody, BiPieChartAlt2, BiBarChartAlt } from "react-icons/bi"

import BMIModal from "./BMIModal"
import BodyFatModal from "./BodyFatModal"
import CaloriesModal from "./CaloriesModal"

function Health() {
  const [bodyFatModalShow, setBodyFatModalShow] = React.useState(false)
  const [bmiModalShow, setBmiModalShow] = React.useState(false)
  const [caloriesModalShow, setCaloriesModalShow] = React.useState(false)

  return (
    <div className="HealthCalc">
      <div className="Inner">
      <h1 className="display-1">Your Health</h1>
              <a onClick={() => setBmiModalShow(true)} className="button mainBtn">
                <BiBody className="btnIcon"/>
                Body Mass Index
              </a>
              <BMIModal
                show={bmiModalShow}
                onHide={() => setBmiModalShow(false)}
              />
              <a onClick={() => setBodyFatModalShow(true)} className="button">
              <BiPieChartAlt2 className="btnIcon"/>
                Body Fat Percentage
              </a>
              <BodyFatModal
                show={bodyFatModalShow}
                onHide={() => setBodyFatModalShow(false)}
              />
              <a onClick={() => setCaloriesModalShow(true)} className="button">
              <BiBarChartAlt className="btnIcon"/>
                Calorie Requirements
              </a>
              <CaloriesModal
                show={caloriesModalShow}
                onHide={() => setCaloriesModalShow(false)}
              />
      </div>
    </div>
  )
}

export default Health

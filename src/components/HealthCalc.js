import React from "react"

import { FaWeight } from "react-icons/fa"
import { AiOutlinePercentage } from "react-icons/ai"
import { FaChartPie } from "react-icons/fa"

import Button from "react-bootstrap/Button"

import BMIModal from "./BMIModal"
import BodyFatModal from "./BodyFatModal"
import CaloriesModal from "./CaloriesModal"

import { FaArrowLeft } from "react-icons/fa"

function HealthCalc() {
  const [bodyFatModalShow, setBodyFatModalShow] = React.useState(false)
  const [bmiModalShow, setBmiModalShow] = React.useState(false)
  const [caloriesModalShow, setCaloriesModalShow] = React.useState(false)

  return (
    <div className="HealthCalc">
      <div className="Inner">
        <div className="container mw-100 text-center">
          <div className="row">
            <div className="col-1">
              <a href="/" className="arrow">
                <FaArrowLeft />
              </a>
            </div>
            <div className="col">
              <br />
              <a onClick={() => setBmiModalShow(true)} className="button">
                <FaWeight className="btnIcon"/>
                Calculate Body Mass Index
              </a>
              <BMIModal
                show={bmiModalShow}
                onHide={() => setBmiModalShow(false)}
              />
              <p>
                Your Body Mass Index (BMI) describes your height-to-weight
                ratio.
                <br />A healthy BMI is between 18 and 25.
              </p>
            </div>
            <div className="col">
              <AiOutlinePercentage />
              <br />
              <a onClick={() => setBodyFatModalShow(true)} className="button">
                Calculate Body Fat Percentage
              </a>
              <BodyFatModal
                show={bodyFatModalShow}
                onHide={() => setBodyFatModalShow(false)}
              />
              <p>
                While BMI can give you a rough idea of how healthy you are, it
                doesn't consider people with a high level of muscle mass.
                Therefore, a body fat percentage estimate gives an indication of
                your body composition.
              </p>
            </div>
            <div className="col">
              <FaChartPie />
              <br />
              <a onClick={() => setCaloriesModalShow(true)} className="button">
                Calculate Calorie Requirements
              </a>
              <CaloriesModal
                show={caloriesModalShow}
                onHide={() => setCaloriesModalShow(false)}
              />
              <p>
                If you are happy with your weight, you can calculate your
                maintenance calorie intake based on exercise levels. If you need
                to gain or lose weight, you would need to be in a caloric
                surplus or defecit respectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthCalc

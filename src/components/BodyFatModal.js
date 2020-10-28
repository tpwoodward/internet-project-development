import React, { useState } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function BodyFatModal(props) {
  const [data, setData] = useState()

  const [waist, setWaist] = useState(0)
  const [gender, setGender] = useState()
  const [neck, setNeck] = useState(0)
  const [height, setHeight] = useState(0)
  const [hip, setHip] = useState(0)
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleWaist = (e) => {
    setWaist(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleNeck = (e) => {
    setNeck(e.target.value)
  }

  const handleHeight = (e) => {
    setHeight(e.target.value)
  }

  const handleHip = (e) => {
    setHip(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleClick = () => {
    fetch(
      `https://fitness-calculator.p.rapidapi.com/bodyfat?waist=${waist}&gender=${gender}&neck=${neck}&heigth=${height}&hip=${hip}&age=${age}&weigth=${weight}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "adf0ea3817msh93d3df2122cf860p158840jsn5320d164d6d5",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Calculate Body Fat Percentage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Waist circumference (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    value={waist}
                    onChange={handleWaist}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="string"
                    as="select"
                    value={gender}
                    onChange={handleGender}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                </Form.Group>
                <Form.Label>Neck circumference (cm)</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="number"
                    value={neck}
                    onChange={handleNeck}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    value={height}
                    onChange={handleHeight}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Hip circumference (cm)</Form.Label>
                  <Form.Control
                    type="string"
                    value={hip}
                    onChange={handleHip}
                  />
                </Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="number"
                    value={age}
                    onChange={handleAge}
                  />
                </Form.Group>
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={handleWeight}
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="secondary" onClick={handleClick}>
                    Calculate
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <h3>Result</h3>
              {data ? (
                <>
                  <p>
                    Remember, there is no one way to accurately gauge your body
                    fat percentage, so here are your results from two different
                    tests!
                  </p>

                  <h5>U.S. Navy Method</h5>
                  <p>
                    {Number(
                      JSON.stringify(data["Body Fat (U.S. Navy Method)"])
                    ).toFixed(0)}
                  </p>
                  <h5>BMI method</h5>
                  <p>
                    {Number(
                      JSON.stringify(data["Body Fat (BMI method)"])
                    ).toFixed(0)}
                  </p>
                </>
              ) : (
                "Press 'Calculate' to see your result"
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default BodyFatModal

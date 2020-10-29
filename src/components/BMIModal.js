import React, { useState } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function BMIModal(props) {
  const [data, setData] = useState()

  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleHeight = (e) => {
    setHeight(e.target.value)
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleClick = () => {
    fetch(
      `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&height=${height}&weight=${weight}`,
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
          Calculate Body Mass Index
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col sm>
              <Form>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    value={age}
                    onChange={handleAge}
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
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={handleWeight}
                  />
                </Form.Group>
                <Form.Group>
                  <Button bsPrefix="buttonSmall" onClick={handleClick}>
                    Calculate
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col sm>
            <h3>Result</h3>
            {data ? (
              <>
            <h5>BMI</h5>
              <p>
                {Number(JSON.stringify(data.bmi)).toFixed(1)}
              </p> 
              <h5>Health</h5>
              <p>
                {JSON.stringify(data.health)}
              </p>
              <h5>Healthy BMI Range</h5>
              <p>
                {JSON.stringify(data.healthy_bmi_range)}
              </p>
              </>
            ) : "Press 'Calculate' to see your result"}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default BMIModal

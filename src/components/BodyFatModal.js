import React, { useState } from "react"

// import elements to be used for modal from React Bootstrap
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// functional component containing content for the Body Fat Percentage modal
function BodyFatModal(props) {
  // defining data, making it relate to State
  const [data, setData] = useState()

  // setting the default value for all fetch request variables to 0 except for gender, as it is a string
  const [waist, setWaist] = useState(0)
  const [gender, setGender] = useState()
  const [neck, setNeck] = useState(0)
  const [height, setHeight] = useState(0)
  const [hip, setHip] = useState(0)
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)

  // make each input field be subject to change based on an event
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

  // defining the fetch request from the Fitness Calculator API, with the user's metrics being variables
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

  // the content within the modal, including the rounded and stringified JSON response
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
            <Col sm>
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
                  <p>
                    No body fat percentage test is 100% accurate, so here are
                    your results for two methods!
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

// export the Body Fat modal for use in the Your Health section
export default BodyFatModal

// import useState from React so that state can be used
import React, { useState } from "react"

// import elements to be used for modal from React Bootstrap 
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// functional component containing content for the Calorie Requirements modal
function CaloriesModal(props) {
  
  // defining data, making it relate to State
  const [data, setData] = useState()

  // setting the default value for all fetch request variables to 0 except for gender, as it is a string
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState()
  const [weight, setWeight] = useState(0)

  // make each input field be subject to change based on an event
  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const handleHeight = (e) => {
    setHeight(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  // defining the fetch request from the Fitness Calculator API, with the user's metrics being variables
  const handleClick = () => {
    fetch(
      `https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=${height}&age=${age}&gender=${gender}&weigth=${weight}`,
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
          Calculate Calorie Requirements
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
              <h5>Exercise 1-3 times/week</h5>
              <p>
              {Number(JSON.stringify(data.data["Exercise 1-3 times/week"])).toFixed(0)} cal
              </p>
              <h5>Exercise 4-5 times/week</h5>
              <p>
              {Number(JSON.stringify(data.data["Exercise 4-5 times/week"])).toFixed(0)} cal
              </p>
              <h5>Intense exercise 3-4 times/week</h5>
              <p>
              {Number(JSON.stringify(data.data["Daily exercise or intense exercise 3-4 times/week"])).toFixed(0)} cal
              </p>
              <h5>Intense exercise 6-7 times/week</h5>
              <p>
              {Number(JSON.stringify(data.data["Intense exercise 6-7 times/week"])).toFixed(0)} cal
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

// export the Calorie Requirements modal for use in the Your Health section
export default CaloriesModal

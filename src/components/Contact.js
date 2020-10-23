import React from "react"
import { BiLeftArrowAlt } from "react-icons/bi"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Contact() {
  return (
    <div className="Help">
      <div className="Inner">
        <div className="container mw-100">
          <div className="row">
            <div className="col-2 subsectionbtn text-left">
              <a href="/" className="arrow text-white">
                <BiLeftArrowAlt />
              </a>
            </div>
            <div className="col"></div>
            <div className="col-5">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Emailing enquiries@passionforhealth.com"
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

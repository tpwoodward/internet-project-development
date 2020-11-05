import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="App-footer">
      <Container>
        <Row>
          <Col>
            <p className="text-center">
              <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fthehealthlab.netlify.app%2F" className="buttonSocial">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fthehealthlab.netlify.app%2F" className="buttonSocial">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fthehealthlab.netlify.app%2F" className="buttonSocial">
                <FaLinkedinIn />
              </a>
              <br></br>
              © Tommy Woodward 2020
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

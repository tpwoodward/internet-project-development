import React from "react"
import SubNav from "./SubNav"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Article2() {
  return (
    <div className="Article">
      <SubNav />
      <div className="Inner">
      <Container fluid>
      <h1 className="display-1">What Are Macros?</h1>
      <Row>
        <Col sm>
        <p>
          Macronutrients, also known as macros, are the three essential
          nutritional components that make up the caloric content of the foods
          we consume. These essential nutritional components are also known as
          fats, proteins and carbohydrates. Simply put, our body uses these
          components as a fuel source to give us the energy required to go about
          our daily tasks - from work and chores to exercise… but that’s not all
          they have to offer!
        </p>
        <p>
          As the name suggests, macronutrients are nutrients, and nutrients are
          substances required for growth, tissue repair, energy provision, body
          temperature regulation, workout fuel, and various other functions.
          Energy comes from foods rich in carbohydrates, protein and fats,
          however, the amount of energy provided depends on the type of
          macronutrient. For example - According to Healthline, both
          carbohydrates and proteins contain 4 calories per 1g, whereas fats
          contain 9 calories per gram.
        </p>
        </Col>
        <Col sm>
        <p>
          Your ideal macro ratio will depend on your goals and unique
          requirements, which is why it’s important to seek assistance from a
          qualified professional, including a Dietitian or Personal Trainer, to
          find the right breakdown for you. Likewise, goal-based macro ratio
          breakdowns may vary from source to source.
        </p>
        <p>
          Before the days of technology, tracking macros required a lot of
          manual work. Now, tracking your macros is as easy as clicking a
          button. With apps such as MyFitnessPal and MyMacros+ doing the
          calculations for you, all you need to do is scan the barcode on the
          package, weigh the amount you’ve had, and all the calculations are
          done for you.
        </p>
        <p className="reference">
          Australian Sports Nutrition. 2019. "Macros 101: What are they and why
          do I need them?" Australian Sports Nutrition.{" "}
          <a className="link" href="https://tinyurl.com/y3bxulgn" target="_blank" rel="noopener noreferrer">
            https://tinyurl.com/y3bxulgn
          </a>
        </p>
        </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default Article2

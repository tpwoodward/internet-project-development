import React from "react"

// import secondary nav bar
import SubNav from "./SubNav"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// functional component containing article information
function Article2() {
  return (
    <div>
      <SubNav />
      <div className="Article">
        <Container fluid className="ArticleContainer">
          <h1 className="display-2">Macros 101</h1>
          <Row>
            <Col>
              <img
                className="img100"
                src="photos/pexels-daria-shevtsova-1095550.jpg"
                alt="Planking shot sourced from Pexels"
              />
              <p>
                In today’s day and age, we are inundated with health blogs,
                Facebook posts, and Instagram ads that all throw around the word
                ‘macros’ like it’s going out of fashion. Thankfully, for any
                fitness buffs or health enthusiasts who live and breathe macros,
                there is some great truth and benefits behind the philosophy of
                counting macros. Gone are the days of counting calories and
                having little focus on the quality of the nutrients we’re
                actually consuming. With the rise of the ‘macro’ phenomenon, we
                now have a much healthier, safer and more effective way of
                reaching our goals faster.
              </p>
              <h2>What are Macros?</h2>
              <p>
                To understand macros and how to use them to your benefit, it’s
                important to first understand exactly what they are. Essential
                nutrients are compounds that your body can’t produce on its own,
                or cannot produce an adequate amount of. As such, these
                nutrients must be sourced from food. Essential nutrients can be
                broken down into two categories:
              </p>
              <ul>
                <li>Macronutrients</li>
                <li>Micronutrients</li>
              </ul>
              <p>
                Macronutrients, also known as macros, are the three essential
                nutritional components that make up the caloric content of the
                foods we consume. These essential nutritional components are
                also known as fats, proteins and carbohydrates. Simply put, our
                body uses these components as a fuel source to give us the
                energy required to go about our daily tasks - from work and
                chores to exercise… but that’s not all they have to offer!
              </p>
              <h2>What do Macros do?</h2>
              <p>
                As the name suggests, macronutrients are nutrients, and
                nutrients are substances required for growth, tissue repair,
                energy provision, body temperature regulation, workout fuel, and
                various other functions. Energy comes from foods rich in
                carbohydrates, protein and fats, however, the amount of energy
                provided depends on the type of macronutrient. For example -
                According to Healthline, both carbohydrates and proteins contain
                4 calories per 1g, whereas fats contain 9 calories per gram.
              </p>
              <h2>So, what should your breakup of macros be?</h2>
              <p>
                Your ideal macro ratio will depend on your goals and unique
                requirements, which is why it’s important to seek assistance
                from a qualified professional, including a Dietitian or Personal
                Trainer, to find the right breakdown for you. Likewise,
                goal-based macro ratio breakdowns may vary from source to
                source.
              </p>
              <p>
                Before the days of technology, tracking macros required a lot of
                manual work. Now, tracking your macros is as easy as clicking a
                button. With apps such as MyFitnessPal and MyMacros+ doing the
                calculations for you, all you need to do is scan the barcode on
                the package, weigh the amount you’ve had, and all the
                calculations are done for you.
              </p>
              <h2>Reference</h2>
              <p>
                Australian Sports Nutrition. 2019. "Macros 101: What are they
                and why do I need them?"{" "}
                <a
                  className="link"
                  href="https://tinyurl.com/y3bxulgn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

// export the functional component
export default Article2

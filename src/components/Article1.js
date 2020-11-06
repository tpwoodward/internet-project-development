import React from "react"
import SubNav from "./SubNav"

// import React Bootstrap grid elements
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// functional component containing article information
function Article1() {
  return (
    <div>
      <SubNav />
      <div className="Article">
        <Container fluid className="ArticleContainer">
          <Row>
            <Col>
              <h1 className="display-2">HIIT vs LISS</h1>
              <img
                className="img100"
                src="photos/pexels-li-sun-2294354.png"
                alt="Planking shot sourced from Pexels"
              />
              <p>
                With so many different types of exercise out there to choose
                from, it can be difficult to know which one is best for you and
                your goals. If you’re trying to build muscle and burn fat, you
                may be left wondering if you should be doing Low-Intensity
                Steady State (LISS) cardio or High-Intensity Interval Training
                (HIIT) as a supplement to your strength training. In order to
                answer this, you need to understand the differences between LISS
                cardio and HIIT.
              </p>
              <p>
                LISS cardio, or low-intensity steady-state cardio, is a form of
                cardio exercise where you maintain the same low-intensity pace
                (that is, a steady-state) for a set period of time, usually for
                a minimum of 30 minutes. It’s performed at a steady pace so that
                you can sustain your energy for the entire duration. Some
                examples of this could be biking, running, brisk walking, rowing
                or swimming.
              </p>
              <p>
                HIIT stands for high-intensity interval training, which is
                another form of cardio-based training but involves short bursts
                of very hard, or high intensity, work followed by recovery
                periods of low-intensity activity or rest.
              </p>
              <p>
                Three days a week is a good amount of HIIT. You want to make
                sure you’re allowing your body to rest and recover between
                sessions, which can take up to 24 hours. Since you are burning
                more calories, you don’t need as many sessions throughout the
                week when compared to steady-state cardio. Also, we know that it
                is much higher in intensity and therefore you cannot be doing it
                every day and be adequately recovered.
              </p>
              <p>
                While both HIIT and LISS have their own benefits, the
                differences between the two can help you understand which is
                better for your training goals. If your goal is fat loss, HIIT
                will be more effective. This is because HIIT is higher in
                intensity and therefore requires less training time, less
                training frequency and still burns more calories. If your goal
                is to get stronger, HIIT will be a better option as there is
                less risk of burning muscle mass. This isn’t to say that LISS
                shouldn’t be included in your training, as it provides benefits
                for heart health, endurance and the lower intensity nature of
                LISS workouts means your body can recover quickly.
              </p>
              <p className="reference">
                Morgan, Maggie. 2020. "3 Differences Between LISS Cardio And
                HIIT (#3 Is Cool)." Fitbod.{" "}
                <a
                  className="link"
                  href="https://tinyurl.com/yxudf239"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://tinyurl.com/yxudf239
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
export default Article1

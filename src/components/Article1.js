import React from "react"
import SubNav from "./SubNav"

function Article1() {
  return (
    <div className="Article">
      <SubNav />
      <div className="Inner">
        <h2>HIIT vs LISS</h2>
        <p>
          With so many different types of exercise out there to choose from, it
          can be difficult to know which one is best for you and your goals. If
          you’re trying to build muscle and burn fat, you may be left wondering
          if you should be doing Low-Intensity Steady State (LISS) cardio or
          High-Intensity Interval Training (HIIT) as a supplement to your
          strength training. In order to answer this, you need to understand the
          differences between LISS cardio and HIIT.
        </p>
        <p>
          So what are the differences between HIIT and LISS Cardio? HIIT, or
          High-Intensity Interval Training, is short in duration (5-20-minutes)
          and higher in intensity. LISS, or Low-Intensity Steady-State, is
          longer in duration (30-60 minutes) and lower in intensity. HIIT is
          also more efficient at burning calories than LISS.
        </p>
        <p>
          While both HIIT and LISS have their own benefits, the differences
          between the two can help you understand which is better for your
          training goals. If your goal is fat loss, HIIT will be more effective.
          This is because HIIT is higher in intensity and therefore requires
          less training time, less training frequency and still burns more
          calories. If your goal is to get stronger, HIIT will be a better
          option as there is less risk of burning muscle mass. This isn’t to say
          that LISS shouldn’t be included in your training, as it provides
          benefits for heart health, endurance and the lower intensity nature of
          LISS workouts means your body can recover quickly.
        </p>
        <p className="reference">
          Morgan, Maggie. 2020. "3 Differences Between LISS Cardio And HIIT (#3
          Is Cool)." Fitbod.{" "}
          <a className="link" href="https://tinyurl.com/yy4k3525">
            https://tinyurl.com/yxudf239.
          </a>
        </p>
      </div>
    </div>
  )
}

export default Article1

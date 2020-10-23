import React from "react"
import "./scss/master.scss"

import Header from "./components/Header"
import Articles from "./components/Articles"
import Health from "./components/Health"
import Help from "./components/Help"
import Footer from "./components/Footer"

import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Article1 from "./components/Article1"
import Article2 from "./components/Article2"
import HealthCalc from "./components/HealthCalc"

function App() {
  return (
    <div>
      <Header />
      <Articles />
      <Article1 />
      <Article2 />
      <Health />
      <HealthCalc />
      <Help />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

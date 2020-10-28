import React from "react"
import "./scss/master.scss"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Articles from "./components/Articles"
import Health from "./components/Health"
import Help from "./components/Help"
import Footer from "./components/Footer"

import FAQ from "./components/FAQ"
import Article1 from "./components/Article1"
import Article2 from "./components/Article2"
import HealthCalc from "./components/HealthCalc"

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/hiit-vs-liss">
            <Article1 />
          </Route>
          <Route path="/what-are-macros">
            <Article2 />
          </Route>
          <Route path="/health-calc">
            <HealthCalc />
          </Route>
          <Route path="/">
            <Header />
            <Articles />
            <Health />
            <Help />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

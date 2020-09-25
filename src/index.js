import React from "react"
import ReactDOM from "react-dom"
import "./scss/master.scss"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { ParallaxProvider } from "react-scroll-parallax"

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById("root")
)

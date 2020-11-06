import React from "react"
import ReactDOM from "react-dom"

// import scss
import "./scss/master.scss"

// import App.js
import App from "./App"

// import boostrap
import "bootstrap/dist/css/bootstrap.min.css"

// import parallax functionality
import { ParallaxProvider } from "react-scroll-parallax"

// make App be rendered in the root div
ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById("root")
)

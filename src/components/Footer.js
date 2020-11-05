import React from "react"

// import social media icons from Font Awesome, through React Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

// functional component containing content for the footer
function Footer() {
  // buttons that allow the user to share the site's landing page on social media are included in the footer along with copyright info
  return (
    <footer className="App-footer">
      <p className="text-center">
        <a
          href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fthehealthlab.netlify.app%2F"
          className="buttonSocial"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fthehealthlab.netlify.app%2F"
          className="buttonSocial"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fthehealthlab.netlify.app%2F"
          className="buttonSocial"
        >
          <FaLinkedinIn />
        </a>
        <br />© Tommy Woodward 2020
      </p>
    </footer>
  )
}

// export the footer to be placed at the bottom of the main screen
export default Footer

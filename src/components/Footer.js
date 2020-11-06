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
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A//thehealthlab.netlify.app"
          className="buttonSocial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Check%20out%20The%20Health%20Lab!%20It%20has%20introductory%20articles%20on%20health%20and%20fitness%20as%20well%20as%20calculators%20for%20your%20BMI,%20body%20fat%20percentage%20and%20calorie%20requirements!%0A%0Ahttps%3A//thehealthlab.netlify.app"
          className="buttonSocial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//thehealthlab.netlify.app&title=&summary=&source="
          className="buttonSocial"
          target="_blank"
          rel="noopener noreferrer"
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

import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Nicholas.
      </div>
      <div className="h1 code mt-4 mb-3">whoIam {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Full Stack Web Developer, UI/UX Developer.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/pizza_papiii_99">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/pizza_papiii_99">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/Nicholaswithak">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.youtube.com"
        >
          <Youtube />
        </a>
        <a className="mr-5 icon" href="mailto://nick@latenightjunkfood.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}

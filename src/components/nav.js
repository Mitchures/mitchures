import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "./image"

const Nav = ({ siteTitle, email }) => (
  <nav>
    <div className="container">
      <div className="grid">
        <div className="col-xs-12 col-sm-6">
          <figure className="media">
            <div className="logo">
              <a href="/">
                <Image alt="Mitchures"/>
              </a>
            </div>
            <figcaption className="logo-content">
              <span>{siteTitle}</span>
            </figcaption>
          </figure>
        </div>
        <div className="col-xs-12 col-sm-6">
          <ul>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#work">Work</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#features">Features</AnchorLink>
            </li>
            <li>
              <a href={"mailto:" + email}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav

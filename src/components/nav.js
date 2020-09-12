import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Mitchures from "./icons/mitchures"

const Nav = ({ title, email }) => {
  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="col-xs-12 col-sm-6">
            <figure className="media animated fadeIn delay-hs">
              <div className="logo">
                <a href="/">
                  <Mitchures />
                </a>
              </div>
              <figcaption className="logo-content">
                <span>{title}</span>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6">
            <ul className="animated fadeIn delay-hs">
              <li>
                <AnchorLink href="#work">Portfolio</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <a href={`mailto:${email}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

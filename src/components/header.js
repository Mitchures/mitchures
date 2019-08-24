import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="container">
        <div className="grid">
          <div className="col-xs-7 col-md-9">
            <figure className="media">
              <div className="logo">
                <AnchorLink href="/">
                  <Image alt="Mitchures"/>
                </AnchorLink>
              </div>
              <figcaption className="logo-content">
                <span>{siteTitle}</span>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-5 col-md-3">
            <ul>
              <li>
                <AnchorLink href="#work">Work</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header

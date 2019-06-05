import React from "react"

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="container">
        <div className="grid">
          <div className="col-xs-7 col-md-9">
            <span>{ siteTitle }</span>
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

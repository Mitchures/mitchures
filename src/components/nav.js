import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Mitchures from "../components/icons/mitchures"
// import Email from "../components/icons/email"
import useDarkMode from "use-dark-mode"

const Nav = ({ siteTitle, email }) => {

  const darkMode = useDarkMode();

  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="col-xs-12 col-sm-6">
            <figure className="media animated fadeInFromLeft delay-hs">
              <div className="logo">
                <a href="/">
                  <Mitchures darkMode={darkMode} />
                </a>
              </div>
              <figcaption className="logo-content">
                <span>{siteTitle}</span>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6">
            <ul className="animated fadeInFromRight delay-hs">
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#work">Portfolio</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              {/*<li>*/}
                {/*<AnchorLink href="#features">Features</AnchorLink>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<Email address={email} />*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

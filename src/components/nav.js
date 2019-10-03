import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import useDarkMode from "use-dark-mode"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import Mitchures from "../components/icons/mitchures"
// import Email from "../components/icons/email"

const Nav = ({ siteTitle, email }) => {

  const darkMode = useDarkMode();

  const handleTheme = theme => theme === "light" ? darkMode.enable() : darkMode.disable();

  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="col-xs-12 col-sm-6">
            <figure className="media">
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
                {/*<Email address={email} />*/}
              </li>
              <li>
                {!darkMode.value && <Sunset isActive={!darkMode.value} onClick={handleTheme} />}
                {darkMode.value && <Sunrise isActive={darkMode.value} onClick={handleTheme} />}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

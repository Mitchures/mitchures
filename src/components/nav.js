import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Image from "./image"
import useDarkMode from "use-dark-mode"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"

const Nav = ({ siteTitle, email }) => {

  const darkMode = useDarkMode();

  const handleTheme = theme => theme === "light" ? darkMode.enable() : darkMode.disable();

  const renderThemeToggle = (size) => {
    return (
      <div className="nav__themes">
        {!darkMode.value && <Sunrise isActive={!darkMode.value} size={size} onClick={handleTheme} />}
        {darkMode.value && <Sunset isActive={darkMode.value} size={size} onClick={handleTheme} />}
      </div>
    )
  }

  return (
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
              <li>
                {renderThemeToggle("s")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

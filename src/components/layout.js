import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Parallax from 'react-rellax'

import Nav from "./nav"
import "../stylesheets/layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            email
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'mitchell hollander, software development, photography' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Parallax speed={4} className="orb" style={{ transform: 'rotate(45deg)' }}/>
        <Nav siteTitle={data.site.siteMetadata.title} email={data.site.siteMetadata.email} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

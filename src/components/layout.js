import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Parallax from 'react-rellax'

import Header from "./header"
import "../stylesheets/layout.scss"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'mitchell hollander, software development, photography' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Parallax speed={4} className="alpha" style={{ transform: 'rotate(45deg)' }}/>
        <Parallax speed={8} className="beta" style={{ transform: 'rotate(45deg)' }}/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="content">
          {children}
        </main>
        <Footer/>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
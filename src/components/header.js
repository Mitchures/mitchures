import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
          query SiteDescriptionQuery {
            site {
              siteMetadata {
                description
              }
            }
          }
        `}
    render={data => (
      <header className="introduction">
        <div className="container">
          <div className="grid">
            <div className="col-xs-12 col-sm-12 col-md-10">
              <h1 className="animated fadeInDown delay-1s">{data.site.siteMetadata.description}</h1>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
          query HeaderSiteDescriptionQuery {
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
              <h1>{data.site.siteMetadata.description}</h1>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Hero = () => (
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
      <section id="hero" className="grid">
        <div className="col-xs-12">
          <h1 className="introduction">{data.site.siteMetadata.description}</h1>
        </div>
      </section>
    )}
  />
)

export default Hero
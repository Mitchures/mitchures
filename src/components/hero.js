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
          {/*<h3>*/}
          {/*By day, you'll find me <em>exploring</em> and <em>creating</em> through beautiful imagery.*/}
          {/*</h3>*/}
          {/*<h3>*/}
          {/*By night, you'll find me wrecking software, while sipping a cup*/}
          {/*of coffee and enjoying a show about nothing.*/}
          {/*</h3>*/}
        </div>
      </section>
    )}
  />
)

export default Hero
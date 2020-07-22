import React from 'react'

import { graphql, StaticQuery } from "gatsby"

import TextCarousel from '../components/carousel'

const Header = () => (
  <StaticQuery
    query={graphql`
          query SiteDescriptionQuery {
            site {
              siteMetadata {
                description
                phrases
              }
            }
          }
        `}
    render={data => (
      <header className="introduction animated fadeIn delay-1s">
        <div className="container">
          <div className="grid">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <h1>{data.site.siteMetadata.description}</h1>
              <h3>As a passionate programmer I enjoy creating digital experiences through beautiful design and semantic code with extensive knowledge of the following technologies:</h3>
              <div className="carousel">
                <TextCarousel
                  phrases={data.site.siteMetadata.phrases}
                  interval={2000}
                  loopPhrases={true}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
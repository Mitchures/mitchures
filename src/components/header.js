import React from "react"

import { graphql, StaticQuery } from "gatsby"

import TextCarousel from "./carousel"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteDescriptionQuery {
        site {
          siteMetadata {
            subtitle
            tagline
            location
            description
            phrases
          }
        }
      }
    `}
    render={(data) => (
      <header>
        <div className="container">
          <div className="grid">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <h3 className="animated fadeIn delay-1s">{data.site.siteMetadata.subtitle}</h3>
              <h1 className="animated fadeIn delay-1hs">
                {data.site.siteMetadata.tagline} <span>{data.site.siteMetadata.location}</span>
              </h1>
              <div className="carousel animated fadeIn delay-2">
                <h2>
                  <TextCarousel
                    phrases={data.site.siteMetadata.phrases}
                    interval={2000}
                    loopPhrases={true}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header

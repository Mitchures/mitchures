import React from "react"

import { graphql, StaticQuery } from "gatsby"
import Card from "./card"

const Work = () => (
  <StaticQuery
    query={graphql`
      query SiteProjectsQuery {
        site {
          siteMetadata {
            projects {
              name
              description
              url
              cover
            }
          }
        }
      }
    `}
    render={(data) => (
      <section id="work" className="animated fadeIn delay-2hs">
        <div className="container">
          <div className="grid">
            {data.site.siteMetadata.projects.map(({ url, name, description, cover }, i) => {
              return (
                <div key={i} className="col-xs-12 col-md-6">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Card header={name} description={description} cover={cover} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )}
  />
)

export default Work

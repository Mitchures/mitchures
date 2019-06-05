import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Work = () => (
  <StaticQuery
    query={graphql`
          query SiteProjectsQuery {
            site {
              siteMetadata {
                projects {
                  name
                  description
                }
              }
            }
          }
        `}
    render={data => (
      <section id="work" className="grid">
        {
          data.site.siteMetadata.projects.map(project => (
            <div className="col-xs-12 col-md-6">
              <a href="#" rel="noopener noreferrer">
                <figure>
                  <figcaption>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          ))
        }
      </section>
    )}
  />
)

export default Work
import React from 'react'

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
            otaku: file(relativePath: { regex: "/otaku.png/" }) {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            crypto: file(relativePath: { regex: "/crypto.png/" }) {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            maku: file(relativePath: { regex: "/maku.png/" }) {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
    render={data => (
      <section id="work" className="animated fadeIn delay-1hs">
        <div className="container">
          <div className="grid">
            {
              data.site.siteMetadata.projects.map((project, i) => {
                return (
                  <div key={i} className="col-xs-12 col-md-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        header={project.name}
                        description={project.description}
                        cover={project.cover}
                      />
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )}
  />
)

export default Work


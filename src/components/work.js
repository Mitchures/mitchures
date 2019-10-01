import React from 'react'

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

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
      <section id="work" className="grid">
        {
          data.site.siteMetadata.projects.map((project, i) => {
            return (
              <div key={i} className="col-xs-12 col-md-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="block grid">
                    {/*<Img className="block-image col-xs-3" fluid={data[`${project.cover}`].childImageSharp.fluid} alt={project.name}/>*/}
                    <div className="block-content col-xs-12">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }
      </section>
    )}
  />
)

export default Work


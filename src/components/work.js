import React from 'react'

import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

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
            <div className="col-xs-12 col-md-3">
              <h3>Software Work</h3>
            </div>
            <div className="col-xs-12 col-md-9">
              {
                data.site.siteMetadata.projects.map((project, i) => {
                  return (
                    <a key={i} href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="block grid">
                        {/*<Img className="block-image col-xs-3" fluid={data[`${project.cover}`].childImageSharp.fluid} alt={project.name}/>*/}
                        <div className="block-content col-xs-9">
                          <h4>{project.name}</h4>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Work


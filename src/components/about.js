import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const About = () => (
  <StaticQuery
    query={graphql`
          query SiteClientsQuery {
            site {
              siteMetadata {
                clients {
                  name
                  summary
                }
              }
            }
          }
        `}
    render={data => (
      <section id="about" className="grid">
        <div className="col-xs-12">
          <h2>About</h2>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>The Story</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>In 2015 Apple launched the "<em>Shot On iPhone 6</em>" campaign to promote their new iPhone. It was that year that I decided to really dive into photography and embrace my inner creative, with nothing but my iPhone to capture photos.</p>
          <p>I would never have thought that only a year later that one of my very own photos would be up all over the world in 26 different countries, in Apple's following campaign for the iPhone 6s.</p>
          <p>From then on, I decided to continue pursuing my passion and take the next step forward in making the world just a little more beautiful through my photographs.</p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>The Clients, Features, &amp; Publications</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <ul>
            {
              data.site.siteMetadata.clients.map(client => (
                <li>
                  <h4>{client.name}</h4>
                  <p>{client.summary}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    )}
  />
)

export default About
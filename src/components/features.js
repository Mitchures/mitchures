import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Features = () => (
  <StaticQuery
    query={graphql`
          query SiteClientsQuery {
            site {
              siteMetadata {
                clients {
                  name
                  url
                  summary
                }
              }
            }
          }
        `}
    render={data => (
      <section id="features">
          <div className="container">
            <div className="grid">
                <div className="col-xs-12 col-md-3">
                    <h3>Clients, Features, &amp; Publications</h3>
                </div>
                <div className="col-xs-12 col-md-9">
                  {
                    data.site.siteMetadata.clients.map((client, i) => {
                        return (
                        <a key={i} target="_blank" rel="noopener noreferrer" href={client.url}>
                          <div className="block grid">
                            <div className="block-content col-xs-12">
                              <h4>{client.name}</h4>
                              <p>{client.summary}</p>
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

export default Features
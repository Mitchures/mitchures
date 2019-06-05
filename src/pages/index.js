import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const clients = [
  {
    name: "Apple",
    summary: "Featured in Apple's Shot On iPhone 6s Campaign where one of my iPhone photos was displayed on billboards all around the world in over 26 countries."
  },
  {
    name: "Water Journal",
    summary: "Featured and Published in Water Journal Volume 3."
  },
  {
    name: "Parkland",
    summary: "Promotional photos & part of the Parkland Field Team."
  },
  {
    name: "Rucksack Magazine",
    summary: "Featured in an Interview on Rucksack Mag's website."
  },
  {
    name: "Welly Merck",
    summary: "Promotional photos for their wrist watches."
  },
  {
    name: "Unsplash",
    summary: "Promotional photos for Unsplash at the Makers to Merchants event hosted by Weebly."
  },
  {
    name: "Mahabis",
    summary: "Promotional photos for Mahabis footwear."
  },
  {
    name: "Trade Coffee",
    summary: "Promotional photos of coffee ordered from Trade Coffee."
  },
  {
    name: "Fotog Magazine",
    summary: "Featured in Volume 2 of Fotog Mag."
  }
]

const Index = () => (
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
      <>
        <Layout>
          <div className="container">
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
            <section id="work" className="grid">

            </section>
            <section id="about" className="grid">
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
                  {clients.map(client => (
                    <li>
                      <h4>{client.name}</h4>
                      <p>{client.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </Layout>
      </>
    )}
  />
)

export default Index

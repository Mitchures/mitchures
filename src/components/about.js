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
        <div className="col-xs-12 col-md-3">
          <h3>About Me</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>When it comes to <em>software development</em>, I specialize in <em>web design</em>, <em>front-end web development</em>, and occasionally <em>back-end web development</em> using <strong>Ruby on Rails</strong> to create minimally designed, collaborative solutions for both clients and associates.</p>
          <p>I enjoy utilizing modern front-end frameworks and technologies such as <strong>React</strong> or <strong>Vue</strong> to create interactive user experiences while writing clean and semantic code. With a passion for self-learning, I strive to improve and challenge myself by applying industry best practices and staying informed with emerging trends.</p>
          <p>Aside from programming, I also take pleasure in the art of photography.</p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Programming Skills</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>5+ years of programming experience in the following languages, concepts, and frameworks:</p>
          <p>
            <em>
              HTML5, CSS3, Javascript, Vue, React, Gatsby, Coffeescript, jQuery, Node, Ruby, Rails, Sass, SQL, Firebase, Bootstrap, Material Design, Jekyll, Liquid, Git, Subversion, and many more.
            </em>
          </p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Clients, Features, &amp; Publications</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <ul>
            {
              data.site.siteMetadata.clients.map((client, i) => {
                return (
                  <li key={i}>
                    <h4>{client.name}</h4>
                    <p>{client.summary}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    )}
  />
)

export default About
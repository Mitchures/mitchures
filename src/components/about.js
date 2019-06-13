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
          <p>Aside from programming, I also take great pleasure in the art of film photography. You can often find me traversing through the streets of Nashville, taking candid shots of its citizens with my trusty <em>Leica M6</em> and a roll of <em>Fujichrome Provia 100F</em>.</p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Programming Skills</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>{(new Date().getFullYear() - 2014)} years of programming experience in the following languages, concepts, and frameworks:</p>
          <div className="skillbar html">
            <span className="title">HTML</span>
            <span className="percent">100%</span>
            <div className="filled" style={{width: '100%'}}/>
          </div>
          <div className="skillbar css">
            <span className="title">CSS</span>
            <span className="percent">90%</span>
            <div className="filled" style={{width: '90%'}}/>
          </div>
          <div className="skillbar js">
            <span className="title">Javascript</span>
            <span className="percent">80%</span>
            <div className="filled" style={{width: '80%'}}/>
          </div>
          <div className="skillbar vue">
            <span className="title">Vue</span>
            <span className="percent">75%</span>
            <div className="filled" style={{width: '75%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">React</span>
            <span className="percent">50%</span>
            <div className="filled" style={{width: '50%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Gatsby</span>
            <span className="percent">50%</span>
            <div className="filled" style={{width: '50%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">jQuery</span>
            <span className="percent">70%</span>
            <div className="filled" style={{width: '70%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Node</span>
            <span className="percent">60%</span>
            <div className="filled" style={{width: '60%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Express</span>
            <span className="percent">50%</span>
            <div className="filled" style={{width: '50%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Ruby on Rails</span>
            <span className="percent">65%</span>
            <div className="filled" style={{width: '65%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">SASS</span>
            <span className="percent">80%</span>
            <div className="filled" style={{width: '80%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">SQL</span>
            <span className="percent">45%</span>
            <div className="filled" style={{width: '45%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Java</span>
            <span className="percent">40%</span>
            <div className="filled" style={{width: '40%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Git</span>
            <span className="percent">80%</span>
            <div className="filled" style={{width: '80%'}}/>
          </div>
          <div className="skillbar">
            <span className="title">Subversion</span>
            <span className="percent">60%</span>
            <div className="filled" style={{width: '60%'}}/>
          </div>
          {/*<p>*/}
            {/*<em>*/}
              {/*HTML5, CSS3, Javascript, Vue, React, Gatsby, Coffeescript, jQuery, Node, Ruby, Rails, Sass, SQL, Firebase, Bootstrap, Material Design, Jekyll, Liquid, Git, Subversion, and many more.*/}
            {/*</em>*/}
          {/*</p>*/}
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
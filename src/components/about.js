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
                  url
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
          <p>When it comes to <em>software development</em>, I specialize in <em>web design</em>, <em>front-end web development</em>, and occasionally <em>back-end web development</em> using <em>Ruby on Rails</em> to create minimally designed, collaborative solutions for both clients and associates.</p>
          <p>I enjoy utilizing modern front-end frameworks and technologies such as <em>React</em> or <em>Vue</em> to create interactive user experiences while writing clean and semantic code. With a passion for self-learning, I strive to improve and challenge myself by applying industry best practices and staying informed with emerging trends.</p>
          <p>Aside from programming, I also take great pleasure in the art of film photography. You can often find me traversing through the streets of Nashville, taking candid shots of it's citizens with my trusty <em>Leica M6</em> and a roll of <em>Fujichrome Provia 100F</em>.</p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Programming Skills</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>{(new Date().getFullYear() - 2014)} years of software development experience in the following:</p>
          <ul>
            <li>
              <h4>Languages</h4>
              <p>JavaScript, Ruby, and Java</p>
            </li>
            <li>
              <h4>JavaScript Frameworks, Libraries, & State Management</h4>
              <p>Vue, Vuex, React, jQuery, and Lodash</p>
            </li>
            <li>
              <h4>Static Site Generators</h4>
              <p>Jekyll and Gatsby</p>
            </li>
            <li>
              <h4>Typed JavaScript & JavaScript Compilers</h4>
              <p>Babel and CoffeeScript</p>
            </li>
            <li>
              <h4>CSS Compilers</h4>
              <p>SASS/SCSS, LESS, CSS Modules, and Styled Components</p>
            </li>
            <li>
              <h4>CSS Frameworks</h4>
              <p>Bootstrap, Foundation, Semantic UI, and Materialize</p>
            </li>
            <li>
              <h4>Server-Side Frameworks & API Layers</h4>
              <p>Ruby on Rails, Express, Firebase, and GraphQL</p>
            </li>
            <li>
              <h4>Database</h4>
              <p>MySQL and Mongo</p>
            </li>
            <li>
              <h4>IDE/Editor</h4>
              <p>Vim, Atom, VS Code, Sublime Text, WebStorm, RubyMine, and IntelliJ IDEA</p>
            </li>
            <li>
              <h4>Source Code Management & Social Coding</h4>
              <p>Git, Subversion, and Github</p>
            </li>
            <li>
              <h4>Issue Tracker</h4>
              <p>JIRA, Redmine, and Trello</p>
            </li>
            <li>
              <h4>Application Architectures</h4>
              <p>Single-Page Application (SPA), Progressive Web Application (PWA), and Multi-Page Application (MPA)</p>
            </li>
            <li>
              <h4>Package & Dependency Management</h4>
              <p>Homebrew, Yarn, RubyGems, and NPM</p>
            </li>
            <li>
              <h4>Unit Testing</h4>
              <p>Mocha and QUnit</p>
            </li>
            <li>
              <h4>Operating Systems</h4>
              <p>Windows and MacOS</p>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Clients, Features, &amp; Publications</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <div className="grid">
            {
              data.site.siteMetadata.clients.map((client, i) => {
                return (
                  <a key={i} target="_blank" rel="noopener noreferrer" className="block col-xs-12" href={client.url}>
                    <h4>{client.name}</h4>
                    <p>{client.summary}</p>
                  </a>
                )
              })
            }
          </div>
        </div>
      </section>
    )}
  />
)

export default About
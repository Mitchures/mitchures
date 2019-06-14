import React from 'react'

import { graphql, StaticQuery } from "gatsby"

// const skills = [
//   ['HTML', '100'],
//   ['CSS', '90'],
//   ['Javascript', '90'],
//   ['Vue', '75'],
//   ['React', '50'],
//   ['Gatsby', '50'],
//   ['jQuery', '70'],
//   ['Node', '60'],
//   ['Express', '50'],
//   ['Ruby on Rails', '65'],
//   ['SASS', '80'],
//   ['SQL', '40'],
//   ['Java', '30'],
//   ['Git', '80'],
//   ['Subversion', '60']
// ]

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
          <p>When it comes to <em>software development</em>, I specialize in <em>web design</em>, <em>front-end web development</em>, and occasionally <em>back-end web development</em> using <em>Ruby on Rails</em> to create minimally designed, collaborative solutions for both clients and associates.</p>
          <p>I enjoy utilizing modern front-end frameworks and technologies such as <em>React</em> or <em>Vue</em> to create interactive user experiences while writing clean and semantic code. With a passion for self-learning, I strive to improve and challenge myself by applying industry best practices and staying informed with emerging trends.</p>
          <p>Aside from programming, I also take great pleasure in the art of film photography. You can often find me traversing through the streets of Nashville, taking candid shots of it's citizens with my trusty <em>Leica M6</em> and a roll of <em>Fujichrome Provia 100F</em>.</p>
        </div>
        <div className="col-xs-12 col-md-3">
          <h3>Programming Skills</h3>
        </div>
        <div className="col-xs-12 col-md-9">
          <p>{(new Date().getFullYear() - 2014)} years of programming experience in the following languages, concepts, and frameworks:</p>
          {/*{*/}
            {/*skills.map((skill, i) => {*/}
              {/*return (*/}
                {/*<div key={i} className="skillbar">*/}
                  {/*<span className="title">{skill[0]}</span>*/}
                  {/*<div className="filled" style={{width: skill[1] + '%'}}/>*/}
                {/*</div>*/}
              {/*)*/}
            {/*})*/}
          {/*}*/}
          <p>
            <em>
              HTML, CSS, Javascript, Vue, React, Gatsby, Coffeescript, jQuery, Node, Ruby, Rails, Sass, SQL, Firebase, Bootstrap, Material Design, Jekyll, Liquid, Git, Subversion, and many more.
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
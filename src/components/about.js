import React from 'react'

const About = () => (
  <section id="about" className="animated fadeIn delay-1hs">
    <div className="container">
      <div className="grid">
        <div className="col-xs-12 col-md-3">
          <h3>About Me</h3>
        </div>
        <div id="about-content" className="col-xs-12 col-md-9">
          {/*<h3>Born and raised in New Orleans, Louisiana </h3>*/}
          <p>When it comes to software development, I specialize in <em>web design</em>, <em>front-end web development</em>, and occasionally <em>back-end web development</em> using <em>Ruby on Rails</em> to create minimally designed, collaborative solutions for both clients and associates.</p>
          <p>I enjoy utilizing modern front-end frameworks and technologies such as <em>React</em> or <em>Vue</em> to create interactive user experiences while writing clean and semantic code. With a passion for self-learning, I strive to improve and challenge myself by applying industry best practices and staying informed with emerging trends.</p>
          <p>Aside from programming, I also take great pleasure in the art of photography. You can often find me traversing through the streets of Nashville, taking candid shots of it's citizens with my trusty <em>Leica M6</em> and a roll of <em>Fujichrome Provia 100F</em>.</p>
          {/*<h4>Before switching exclusively to analog photography, I mainly captured photos with my iPhone which eventually landed me a spot in Apple's World Gallery campaign for the iPhone 6s.</h4>*/}
        </div>
      </div>
    </div>
  </section>
)

export default About
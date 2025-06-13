import React from "react"

const About = () => (
  <section id="about" className="animated fadeIn delay-2hs">
    <div className="container">
      <div className="grid">
        <div className="col-xs-12 col-md-3">
          <h3>About Me</h3>
        </div>
        <div id="about-content" className="col-xs-12 col-md-9">
          <p>
            When it comes to software development, I specialize in <em>UI/UX</em> and{" "}
            <em>full-stack web development</em> using the latest techniques and concepts to build
            minimally designed and collaborative solutions for both clients and associates.
          </p>
          <p>
            As a developer, I enjoy utilizing modern frameworks and technologies such as{" "}
            <em>React</em> or <em>Vue</em> to create interactive user experiences while writing
            clean and semantic code. With a passion for self-learning, I strive to improve and
            challenge myself by applying industry best practices and staying informed with emerging
            trends.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About

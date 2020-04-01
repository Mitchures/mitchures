import React from 'react'

const Skills = () => (
    <section id="skills">
        <div className="container">
            <div className="grid">
                <div className="col-xs-12 col-md-3">
                    <h3>Skills</h3>
                </div>
                <div className="col-xs-12 col-md-9">
                    {/*<p>{(new Date().getFullYear() - 2014)} years of software development experience in the following:</p>*/}
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
            </div>
        </div>
    </section>
)

export default Skills

import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Work from '../components/work'

const Index = () => (
  <Layout>
    <div className="container">
      <Hero/>
      <Work/>
      <About/>
    </div>
  </Layout>
)

export default Index

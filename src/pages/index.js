import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Skills from "../components/skills"
import Features from "../components/features"
import Work from '../components/work'
import Footer from "../components/footer"

const Index = () => (
  <Layout>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Features/>
    <Footer/>
  </Layout>
)

export default Index
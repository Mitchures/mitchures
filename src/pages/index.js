import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Skills from "../components/skills"
// import Features from "../components/features"
import Work from '../components/work'
import Footer from "../components/footer"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <About/>
    <Work/>
    {/*<Skills/>*/}
    {/*<Features/>*/}
    <Footer/>
  </Layout>
)

export default Index

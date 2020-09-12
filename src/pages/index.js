import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Work from "../components/work"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Work />
    <About />
    <Footer />
  </Layout>
)

export default Index

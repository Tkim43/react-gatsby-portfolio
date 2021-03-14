import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/aboutme"
import Nav from '../components/nav'

const IndexPage = () => {
  return (
    <Layout>
      <Nav/>
      <AboutMe/>
    </Layout>
  )
}

export default IndexPage

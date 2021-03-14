import React from "react"
import styled from "styled-components"
import Spinner from '../components/spinner'
// import GlobalStyle from "./globalStyle"
// import Header from "./header"
// import Footer from "./footer"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    height: 100%;
    padding: 0 2.5rem;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {/* <GlobalStyle /> */}
      {/* <Header /> */}
      <main id="main-content">{children}</main>
      {/* <Footer /> */}
      <Spinner/>
    </StyledLayout>
  )
}

export default Layout
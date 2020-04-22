/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle } from 'styled-components'

import Header from "./Header/"
import Hero from "./Hero"
import Ending from "./Ending"
import Footer from "./Footer"
import "./layout.css"
import "./inter.css"

import { BackgroundInject } from './style'

const GS = createGlobalStyle`${BackgroundInject}`;

const Layout = ({ children, center }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GS />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero>
        {children}
      </Hero>
      <Ending />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool
}

export default Layout

import React from "react"
import '../assets/css/layout.css'
import Footer from "./footer"
import Nav from './nav'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


function Layout({ children }){
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  const {title, description, author, url} = site.siteMetadata

  return (
    <section className="layout">
    <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={title}
    link={url}
    titleTemplate={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      }]}
      />
  
      <Nav />
        {children}
        <Footer />
    </section>
  )
}


export default Layout

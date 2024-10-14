import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import News from "../components/page/news"
import Important from "../components/page/important"
import PracticeInfo from "../components/page/practiceInfo"
import Team from "../components/page/team"
import ImageBlock from "../components/page/imageBlock"
import Faq from "../components/page/faq"
import AfterHours from "../components/page/afterHours"
import Map from "../components/page/map"
import Feedback from "../components/page/feedback"
import Modal from "./modal"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = "Home"

    return (
      <>
        <SEO title={pageTitle} />
        <Modal />
        <News posts={data.allMarkdownRemark.edges} />
        <Important />
        <section id="services">
          <PracticeInfo />
        </section>
        <Team />
        <ImageBlock />
        <Faq />
        <AfterHours />
        <Map />
        <Feedback />
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMM YYYY")
            title
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/page/hero"
import News from "../components/page/news"
import PracticeInfo from "../components/page/practiceInfo"
import Team from "../components/page/team"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Doncaster East Family Medical Centre" />
        <Hero />
        <News posts={data.allMarkdownRemark.edges} />
        <PracticeInfo />
        <Team />
        <div className="flex">
          <StaticImage src="../../content/assets/defmc_01.jpg" alt="DEFMC building" />
          <StaticImage src="../../content/assets/defmc_02.jpg" alt="DEFMC reception" />
          <StaticImage src="../../content/assets/defmc_03.jpg" alt="DEFMC front" />
        </div>
      </Layout>
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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

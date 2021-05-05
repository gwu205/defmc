import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <section className="bg-primary">
          <div className="section py-24 text-center">
            <h1 
              className="font-sans text-xl text-white">
                Your family medical care specialist
              </h1>
            <h2 
              className="heading-lg text-white py-4">
                Make an appointment online
              </h2>
            <a 
              href="#" 
              className="font-sans text-white border rounded p-4 my-4 shadow-none inline-block transition duration-500 hover:opacity-75">
                Schedule appointment
            </a>
            <h2 
              className="font-sans text-white py-4">
                Or call us at <a className="font-bold" href="#">9842 8585</a>
            </h2>
          </div>
        </section>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3 className="text-2xl font-black mt-16 mb-2">
                  <Link
                    className="text-blue-600 shadow-none"
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
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

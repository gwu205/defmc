import React from "react"
import { Link, graphql } from "gatsby"

class News extends React.Component {
    render () {
        return (
            <section className="section py-16">
                <h2 
                className="heading-lg text-center mb-8">
                    News
                </h2>
                {this.props.posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <article className="border-2 border-primary rounded p-6 flex" key={node.fields.slug}>
                    <p 
                        className="font-sans w-32 pr-4">
                        {node.frontmatter.date}
                    </p>
                    <div>
                        <header>
                        <h3 className="font-sans font-bold text-xl">
                            <Link
                            className="shadow-none hover:text-primary hover:underline"
                            to={node.fields.slug}
                            >
                            {title}
                            </Link>
                        </h3>
                        </header>
                        <section>
                        <p
                            className="text-sm mt-2"
                            dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                            }}
                        />
                        </section>
                    </div>
                    </article>
                )
                })}
            </section>
        )
    }
}

export default News

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

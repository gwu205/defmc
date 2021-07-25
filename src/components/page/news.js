import React from "react"
import { Link, graphql } from "gatsby"
import { withTrans } from "../../i18n/withTrans"

class News extends React.Component {
  render() {
    const { t } = this.props
    return (
      <section className="section py-16">
        <h2 className="heading-lg text-center mb-8">{t("news")}</h2>
        <dl className="max-w-2xl mx-auto border-4 border-primary rounded-lg p-6">
          {this.props.posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article
                className="flex flex-wrap md:flex-nowrap"
                key={node.fields.slug}
              >
                <p className="font-bold w-full text-xs md:text-base md:w-40 pr-4 flex-shrink-0">
                  {node.frontmatter.date}
                </p>
                <div>
                  <dt className="font-bold">
                    <Link
                      className="shadow-none hover:text-primary hover:underline"
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </dt>
                  <dd
                    className="text-sm mt-2"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </article>
            )
          })}
        </dl>
      </section>
    )
  }
}

export default withTrans(News)

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

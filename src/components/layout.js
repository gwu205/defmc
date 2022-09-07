import React from "react"
import { withTrans } from "../i18n/withTrans"
import { Link } from "gatsby"
import Hero from "../components/page/hero"
import BlogHeader from "./blog-header"
import Defmc from "../../content/assets/defmc"
import privacyPolicy from "../../content/assets/privacy_policy.pdf"

class Layout extends React.Component {
  render() {
    const { location, children, t, i18n } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath
    let header

    if (location.pathname === rootPath) {
      header = <Hero />
    } else {
      header = (
        <header>
          <BlogHeader />
        </header>
      )
    }
    return (
      <>
        {header}
        <main className={i18n.languages[0] === "en" ? "" : "zh"}>
          {children}
        </main>
        <footer className="bg-secondary">
          <div className="section py-4 text-white text-xs text-center">
            {isRoot ? (
              ""
            ) : (
              <Link className="py-8 mx-auto block w-max" to={`/`}>
                <Defmc className="text-white w-20 h-auto" />
              </Link>
            )}
            © {new Date().getFullYear()} Doncaster East {t("fmc")}
            &emsp;|&emsp;{" "}
            <a href={privacyPolicy} target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </footer>
      </>
    )
  }
}

export default withTrans(Layout)

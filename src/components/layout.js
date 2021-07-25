import React from "react"
import { withTrans } from "../i18n/withTrans"
import { Link } from "gatsby"
import Hero from "../components/page/hero"
import BlogHeader from "./blog-header"
import DefmcLogo from "../../content/assets/defmc_logo.svg"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children, t, i18n } = this.props
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
        <main className={i18n.languages[0] === "zh-Hant" ? "zh" : ""}>
          {children}
        </main>
        <footer className="bg-secondary">
          <div className="section py-4 text-white text-xs text-center">
            {isRoot ? (
              ""
            ) : (
              <Link to={`/`}>
                <img className="w-20 mx-auto" src={DefmcLogo} />
              </Link>
            )}
            © {new Date().getFullYear()} Doncaster East {t("fmc")}
          </div>
        </footer>
      </>
    )
  }
}

export default withTrans(Layout)

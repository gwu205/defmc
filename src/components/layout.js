import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import DefmcLogo from '../../content/assets/defmc_logo.svg'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = (location.pathname === rootPath)
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="text-6xl font-black font-sans mb-10 mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="text-2xl font-sans font-black mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <header>{header}</header>
        <Header></Header>
        <main>{children}</main>
        <footer className="bg-secondary">
          <div className="section py-4 text-white text-xs text-center">
            { isRoot ? ('') : (
              <Link to={`/`}>
                <img className="w-20 mx-auto" src={DefmcLogo} />
              </Link>
            )}
            © {new Date().getFullYear()} Doncaster East Family Medical Centre
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout

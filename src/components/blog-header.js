import React from "react"
import { Link } from "gatsby"
import logo from "../../content/assets/defmc_logo_dark.svg"

const BlogHeader = () => {
  return (
    <header className="w-auto">
      <div className="w-2/4 mx-auto py-8">
        <Link to={`/`}>
          <img className="h-16 mb-0" src={logo} alt="DEFMC" />
        </Link>
      </div>
    </header>
  )
}

export default BlogHeader

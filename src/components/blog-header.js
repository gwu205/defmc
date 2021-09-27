import React from "react"
import { Link } from "gatsby"
import logo from "../../content/assets/defmc_logo_dark.svg"

const BlogHeader = () => {
  return (
    <nav className="w-auto bg-gray-100">
      <div className="max-w-xl mx-auto py-8 px-6">
        <Link to={`/`}>
          <img className="h-16 mb-0" src={logo} alt="DEFMC" />
        </Link>
      </div>
    </nav>
  )
}

export default BlogHeader

import React from "react"
import logo from "../../content/assets/defmc_logo_dark.svg"

const BlogHeader = () => {
  return (
    <header class="w-auto">
       <div class="w-2/4 mx-auto py-8">
          <img class="h-16 mb-0" src={logo} alt="DEFMC" />
        </div>
    </header>
  )
}

export default BlogHeader
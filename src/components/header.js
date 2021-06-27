import React from "react"
import logo from "../../content/assets/defmc_logo.svg"

const Header = () => {
  return (
    <header class="bg-primary font-sans flex justify-around pt-6 pb-6 items-center">
      <img class="h-8 mb-0" src={logo} alt="DEFMC" />
      <div class="flex text-white items-center">
        <p class="text-right text-sm pr-8 hidden md:block">Doncaster East Family Medical Centre<br/>116    lackburn Road, Doncaster East, VIC, 3109</p>
        <a class="mr-8">中文</a>
        <a>English</a>
      </div>
    </header>
  )
}

export default Header

import React from "react"
import { withTrans } from "../i18n/withTrans"
import LanguageMenu from "./languageMenu"
import logo from "../../content/assets/defmc_logo.svg"

const Header = ({ t }) => {
  return (
    <header className="font-sans flex justify-around pt-6 pb-6 items-center">
      <img className="h-8 mb-0" src={logo} alt="DEFMC" />
      <div className="flex text-white items-center">
        <p className="text-right text-sm pr-8 hidden md:block">
          Doncaster East {t("fmc")}
        </p>
        <LanguageMenu />
      </div>
    </header>
  )
}

export default withTrans(Header)

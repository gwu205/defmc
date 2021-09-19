import React from "react"
import { withTrans } from "../i18n/withTrans"
import LanguageMenu from "./languageMenu"
import Defmc from "../../content/assets/defmc"

const Header = ({ t }) => {
  return (
    <nav className="font-sans flex justify-around pt-6 pb-6 items-center text-white md:text-primary">
      <Defmc className="h-8 w-auto" />
      <div className="flex items-center">
        <p className="text-right text-sm pr-8 hidden md:block">
          Doncaster East {t("fmc")}
        </p>
        <LanguageMenu />
      </div>
    </nav>
  )
}

export default withTrans(Header)

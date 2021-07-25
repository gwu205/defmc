import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <button
        onClick={() => changeLanguage("en")}
        className="mr-4 hover:opacity-75"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("zh-Hant")}
        className="hover:opacity-75"
      >
        中文
      </button>
    </>
  )
}

export default LanguageMenu

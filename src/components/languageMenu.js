import React from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <button
        onClick={() => changeLanguage("en")}
        className={`hover:opacity-75${
          i18n.language === "en" ? " font-bold" : ""
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("zh-Hant")}
        className={`hover:opacity-75${
          i18n.language === "zh-Hant" ? " font-bold" : ""
        }`}
      >
        中文
      </button>
    </>
  )
}

export default LanguageMenu

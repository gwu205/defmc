import React from "react"
import { withTrans } from "../../i18n/withTrans"
import Defmc from "../../../content/assets/defmc"

const Feedback = ({ t }) => {
  return (
    <article className="bg-secondary pt-16 pb-4 sm:py-16 text-white">
      <div className="section flex flex-wrap small">
        <div className="w-full sm:w-1/3 pr-0 sm:pr-8 pb-6 sm:pb-0">
          <h4 className="paragraph-heading">{t("feedback.title")}</h4>
          <p>{t("feedback.description")}</p>
        </div>
        <div className="w-full sm:w-1/3 pb-8 sm:pb-0">
          <p className="paragraph-heading">{t("feedback.vhsc")}</p>
          <p>
            Level 30, 570 Bourke Street
            <br />
            Melbourne 3000
            <br />
            {t("tel")}: 8601 5222
          </p>
          <p className="paragraph-heading">{t("feedback.ahpra")}</p>
          <p>
            Level 8, 111 Bourke Street
            <br />
            Melbourne 3000
            <br />
            {t("tel")}: 1300 419 4950
          </p>
        </div>
        <div className="flex items-end justify-center sm:justify-end w-full sm:w-1/3">
          <Defmc className="w-24 h-auto text-white" />
        </div>
      </div>
    </article>
  )
}

export default withTrans(Feedback)

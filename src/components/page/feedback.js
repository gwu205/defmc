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
            {t("tel")}: 1300 582 113
            <br />
            <a
              href="https://hcc.vic.gov.au/make-complaint "
              target="_blank"
              rel="noreferrer"
            >
              hcc.vic.gov.au
            </a>
          </p>
          <p className="paragraph-heading">{t("feedback.ahpra")}</p>
          <p>
            {t("tel")}: 1300 419 495
            <br />
            <a
              href="https://www.ahpra.gov.au/Notifications/Concerned-about-a-health-practitioner.aspx"
              target="_blank"
              rel="noreferrer"
            >
              ahora.gov.au
            </a>
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

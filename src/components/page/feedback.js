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
          <a
            href="https://hcc.vic.gov.au/make-complaint "
            target="_blank"
            rel="noreferrer"
          >
            <p className="paragraph-heading">{t("feedback.vhsc")}</p>
            <p>
              {t("tel")}: 1300 582 113
              <br />
              hcc.vic.gov.au
            </p>
          </a>
          <a
            href="https://www.ahpra.gov.au/Notifications/Concerned-about-a-health-practitioner.aspx"
            target="_blank"
            rel="noreferrer"
            className="block mt-3"
          >
            <p className="paragraph-heading">{t("feedback.ahpra")}</p>
            <p>
              {t("tel")}: 1300 419 495
              <br />
              ahpra.gov.au
            </p>
          </a>
        </div>
        <div className="w-full sm:w-1/3 pb-8 sm:pb-0">
          <h4 className="paragraph-heading">{t("privacy.title")}</h4>
          <p>{t("privacy.content_1")}</p>
          <p>{t("privacy.content_2")}</p>
        </div>
        <div className="flex items-end justify-center sm:justify-end w-full sm:w-1/3">
          <Defmc className="w-24 h-auto text-white" />
        </div>
      </div>
    </article>
  )
}

export default withTrans(Feedback)

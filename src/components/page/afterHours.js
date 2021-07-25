import React from "react"
import { withTrans } from "../../i18n/withTrans"
import HealthSick from "../../../content/assets/health-sick.svg"

const AfterHours = ({ t }) => {
  return (
    <section className="bg-lightgray">
      <div className="section py-24 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={HealthSick} />
        </div>
        <article className="w-full md:w-1/2 flex flex-col justify-content pl-0 md:pl-8">
          <h3 className="heading-lg mb-4 text-center md:text-left">
            {t("afterhours.title")}
          </h3>
          <p>{t("afterhours.description")}</p>
          <p className="font-bold">{t("afterhours.emergency")}</p>
          <p>{t("tel")}: 000</p>
          <p className="font-bold">{t("afterhours.gp")}</p>
          <p>
            36 Wellington Road
            <br />
            Box Hill 3128
            <br />
            {t("tel")}: 9899 9980
          </p>
          <p className="font-bold">{t("afterhours.locum")}</p>
          <p>{t("tel")}: 9429 5677</p>
        </article>
      </div>
    </section>
  )
}

export default withTrans(AfterHours)

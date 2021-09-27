import React from "react"
import { withTrans } from "../../i18n/withTrans"
import HealthSick from "../../../content/assets/health-sick.svg"

const AfterHours = ({ t }) => {
  return (
    <section className="bg-lightgray">
      <div className="section py-24 flex flex-wrap">
        <div className="w-full mb-6">
          <img className="w-full max-w-lg mx-auto" src={HealthSick} />
        </div>
        <article className="w-full lg:w-1/2 pr-0 lg:pr-6">
          <h3 className="heading-lg mb-4 text-center md:text-left">
            {t("emergency.title")}
          </h3>
          <p>{t("emergency.description")}</p>
          <p className="font-bold">{t("emergency.emergency")}</p>
          <p>{t("emergency.000a")}</p>
          <p>
            <strong>{t("emergency.000b")}</strong>
          </p>
        </article>
        <article className="w-full lg:w-1/2 pl-0 lg:pl-6">
          <h3 className="heading-lg mb-4 text-center md:text-left">
            {t("afterhours.title")}
          </h3>
          {t("afterhours.description").map((p) => {
            return <p>{p}</p>
          })}
        </article>
      </div>
    </section>
  )
}

export default withTrans(AfterHours)

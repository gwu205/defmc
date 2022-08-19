import React from "react"
import { withTrans } from "../../i18n/withTrans"

const Important = ({ t }) => {
  return (
    <section className="bg-primary">
      <div className="section py-16 text-center text-white">
        <h3 className="uppercase tracking-widest font-bold text-sm mb-2">
          {t("important.label")}
        </h3>
        <h2 className="heading-lg mb-4">{t("important.title")}</h2>
        <article className="max-w-2xl mx-auto">
          <p>{t("important.content_main.1")}</p>
          <p>
            <strong>{t("important.content_main.2")}</strong>
          </p>
          <p className="underline">{t("important.content_main.3")}</p>
          <p>{t("important.content_main.4")}</p>
          <hr className="h-px bg-white my-8" />
          <a href="https://www.hotdoc.com.au" target="_blank" rel="noreferrer">
            <h4 className="font-bold mt-4 mb-1">
              {t("important.content_2_link")} ⟶
            </h4>
            <p className="text-sm">{t("important.content_2")}</p>
          </a>
        </article>
      </div>
    </section>
  )
}

export default withTrans(Important)

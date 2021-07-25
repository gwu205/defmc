import React from "react"
import { withTrans } from "../../i18n/withTrans"
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs"

function Faq({ t }) {
  resetIdCounter()

  return (
    <section className="section py-24">
      <h2 className="heading-lg text-center mb-8">{t("faq.title")}</h2>
      <Tabs className="grid grid-cols-3">
        <TabList className="tab-list col-span-full md:col-span-1 pr-0 md:pr-4 mb-4 md:mb-0">
          <Tab>{t("faq.general.title")}</Tab>
          <Tab>{t("faq.appointments.title")}</Tab>
          <Tab>{t("faq.billing.title")}</Tab>
        </TabList>

        <div className="col-span-full md:col-span-2">
          <TabPanel>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.privacy_t")}
              </h4>
              {t("faq.general.privacy_c").map((p) => {
                return <p>{p}</p>
              })}
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.reminder_t")}
              </h4>
              <p>{t("faq.general.reminder_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">{t("faq.general.repeat_t")}</h4>
              {t("faq.general.repeat_c").map((p) => {
                return <p>{p}</p>
              })}
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.disabled_t")}
              </h4>
              <p>{t("faq.general.disabled_c")}</p>
            </article>
          </TabPanel>
          <TabPanel>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.appointments.group_t")}
              </h4>
              <p>{t("faq.appointments.group_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.appointments.schedule_t")}
              </h4>
              <p>{t("faq.appointments.schedule_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.appointments.walkin_t")}
              </h4>
              <p>{t("faq.appointments.walkin_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.appointments.results_t")}
              </h4>
              <p>{t("faq.appointments.results_c")}</p>
            </article>
          </TabPanel>
          <TabPanel>
            <article>
              <h4 className="paragraph-heading">{t("faq.billing.bulk_t")}</h4>
              <p>{t("faq.billing.bulk_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.billing.payment_t")}
              </h4>
              <p>{t("faq.billing.payment_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">{t("faq.billing.rebate_t")}</h4>
              <p>{t("faq.billing.rebate_c")}</p>
            </article>
            <article>
              <h4 className="paragraph-heading">{t("faq.billing.fee_t")}</h4>
              <p>{t("faq.billing.fee_c")}</p>
            </article>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  )
}

export default withTrans(Faq)

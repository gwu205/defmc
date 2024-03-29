import React from "react"
import { Trans } from "react-i18next"
import { withTrans } from "../../i18n/withTrans"
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs"
import infobrochure from "../../../content/assets/infobrochure_aug2022.pdf"

function paragraph(arr) {
  return arr.map((p) => {
    return <p>{p}</p>
  })
}

const attachment = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
)

function Faq({ t }) {
  resetIdCounter()

  return (
    <section id="faq" className="section py-24">
      <h2 className="heading-lg text-center mb-8">{t("faq.title")}</h2>
      <Tabs className="grid grid-cols-3">
        <TabList className="tab-list col-span-full md:col-span-1 pr-0 md:pr-4 mb-4 md:mb-0">
          <div className="sticky top-48">
            <Tab>{t("faq.general.title")}</Tab>
            <Tab>{t("faq.appointments.title")}</Tab>
            <Tab>{t("faq.billing.title")}</Tab>
          </div>
        </TabList>

        <div className="col-span-full md:col-span-2">
          <TabPanel>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.appointment_t")}
              </h4>
              <p>
                <Trans i18nKey="faq.general.appointment_link">
                  {/* {t("faq.general.appointment_c1")} */}
                  <a
                    className="font-bold"
                    href="https://www.hotdoc.com.au/medical-centres/doncaster-east-VIC-3109/doncaster-east-family-medical-centre/doctors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HotDoc
                  </a>
                </Trans>
              </p>
              {paragraph(t("faq.general.appointment_c"))}
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.privacy_t")}
              </h4>
              {paragraph(t("faq.general.privacy_c"))}
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.reminder_t")}
              </h4>
              {paragraph(t("faq.general.reminder_c"))}
            </article>
            <article>
              <h4 className="paragraph-heading">{t("faq.general.repeat_t")}</h4>
              {paragraph(t("faq.general.repeat_c"))}
            </article>
            <article>
              <h4 className="paragraph-heading">
                {t("faq.general.prescription_t")}
              </h4>
              {paragraph(t("faq.general.prescription_c"))}
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
            <article>
              <h4 className="paragraph-heading">
                {t("faq.appointments.phone_t")}
              </h4>
              {paragraph(t("faq.appointments.phone_c"))}
            </article>
          </TabPanel>
          <TabPanel>
            <article>
              <h4 className="paragraph-heading">{t("faq.billing.bulk_t")}</h4>
              {/* <p>{t("faq.billing.bulk_c")}</p> */}
              {paragraph(t("faq.billing.bulk_c"))}
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
      <div className="text-center mt-16">
        <h2 className="heading-lg mb-3">More Info</h2>
        <p className="text-base">
          <a href={infobrochure} target="_blank" rel="noreferrer">
            {attachment}
            Click here for a full list of our services and how to reach us
          </a>
        </p>
      </div>
    </section>
  )
}

export default withTrans(Faq)

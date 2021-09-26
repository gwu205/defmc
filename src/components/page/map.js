import React from "react"
import { withTrans } from "../../i18n/withTrans"

const Map = ({ t }) => {
  return (
    <section className="section py-24 flex flex-wrap md:flex-nowrap">
      <article className="w-full md:w-80 mr-0 md:mr-12 flex flex-col justify-center text-xl text-center md:text-left">
        <h2 className="heading-lg mb-6">{t("contact")}</h2>
        <p>
          116 Blackburn Road, <br />
          Doncaster East, <br />
          VIC, 3109
        </p>
        <p className="text-base">{t("parking")}</p>
        <p className="mt-4">
          <a href="tel:98428585">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="ml-4 align-middle">9842 8585</span>
          </a>
        </p>
        <p className="mt-4">
          <a
            href="https://www.facebook.com/defmc116"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="ml-4 align-middle">/defmc116</span>
          </a>
        </p>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9275905730497!2d145.15960601512717!3d-37.79173667975634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad638f5b377338f%3A0x133922b28603b086!2sDoncaster%20East%20Family%20Medical%20Centre!5e0!3m2!1sen!2sjp!4v1621600650559!5m2!1sen!2sjp"
        className="border-0 w-full h-96"
        allowFullScreen=""
        loading="lazy"
      />
    </section>
  )
}

export default withTrans(Map)

import React from "react"
import { withTrans } from "../../i18n/withTrans"
import infobrochure from "../../../content/assets/infobrochure_aug2022.pdf"

const phone = (
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
)

const fax = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="inline-block"
    stroke="currentColor"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m12.37 21.79.01.007a4.5 4.5 0 0 0 5.6-.615l.629-.629a1.5 1.5 0 0 0 0-2.122l-2.653-2.651a1.5 1.5 0 0 0-2.122 0h0a1.5 1.5 0 0 1-2.121 0l-4.242-4.243a1.5 1.5 0 0 1 0-2.121h0a1.5 1.5 0 0 0 0-2.122L4.819 4.643a1.5 1.5 0 0 0-2.121 0l-.63.629a4.5 4.5 0 0 0-.614 5.6l.006.01A40.606 40.606 0 0 0 12.37 21.79ZM17.25 1.5h6m-6 4.5h6m-6 4.5h6m-10.5-9h1.5M12.75 6h1.5m-1.5 4.5h1.5"
    />
  </svg>
)

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

const Map = ({ t }) => {
  return (
    <section
      id="contact"
      className="section py-24 flex flex-wrap md:flex-nowrap items-center"
    >
      <article className="w-full md:w-96 mr-0 md:mr-12 flex flex-col justify-center text-xl text-center md:text-left">
        <h2 className="heading-lg mb-6">{t("contact")}</h2>
        <p>
          116 Blackburn Road, <br />
          Doncaster East, <br />
          VIC, 3109
        </p>
        <p className="text-base">{t("parking")}</p>
        <p className="text-base mt-4">
          <a href="tel:98428585">
            {phone}
            <span className="ml-4 align-middle">03 9842-8585 (Tel)</span>
          </a>
        </p>
        <p className="text-base">
          {fax}
          <span className="ml-4 align-middle">03 9841-8798 (Fax)</span>
        </p>
        <h2 className="heading-lg my-6">Hours</h2>
        <p className="text-base">
          <small>(Closed Sundays & Public Holidays)</small>
          <br />
          Monday - Friday: 8am – 6pm
          <br />
          Saturday: 8am – 12noon
        </p>
        <h2 className="heading-lg my-6">More Info</h2>
        <p className="text-base">
          <a href={infobrochure} target="_blank" rel="noreferrer">
            {attachment}
            Click here for a full list of our services and how to reach us
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

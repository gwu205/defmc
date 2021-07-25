import React from "react"
import { withTrans } from "../../i18n/withTrans"
import Header from "../header"
import Doctor from "../../../content/assets/doctor.svg"

const Hero = ({ t, i18n }) => {
  return (
    <section className="bg-hero">
      <Header />
      <div className="flex max-w-screen-md mx-auto flex-wrap">
        <div className="section py-12 md:py-24 w-full text-center">
          <h1 className="font-sans font-bold text-4xl tracking-tight mb-5 md:text-7xl text-white">
            {t("hero.tagline")}
          </h1>
          <h2 className="font-sans text-2xl tracking-tight text-white my-4">
            116 Blackburn Road, Doncaster East, VIC, 3109
          </h2>
          <a
            href="https://www.hotdoc.com.au/medical-centres/doncaster-east-VIC-3109/doncaster-east-family-medical-centre/doctors"
            target="_blank"
            rel="noopener"
            className="font-sans text-white border rounded p-4 my-4 shadow-none inline-block transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-25 hover:scale-105 hover:no-underline hover:opacity-100"
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="ml-3 align-middle">{t("hero.button")}</span>
          </a>
          <p className="font-sans text-white">{t("hero.CTA")}</p>
          <h2 className="font-sans text-white">
            {t("hero.phone")}{" "}
            <a className="font-bold" href="tel:98428585">
              9842 8585
            </a>
          </h2>
        </div>
        {/* <div className="w-full md:w-1/2 flex items-center justify-center block pt-12 md:pt-0 md:hidden">
          <img className="h-96 mb-0" src={Doctor} />
        </div> */}
      </div>
    </section>
  )
}

export default withTrans(Hero)

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { withTrans } from "../../i18n/withTrans"
import Header from "../header"

const Hero = ({ t, i18n }) => {
  return (
    <section className="banner">
      <Header />
      <div className="flex min-h text-white md:text-primary">
        <div className="flex flex-col justify-center px-4 md:pl-24 xl:pl-32 py-12 md:py-24 w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-sans font-bold text-6xl tracking-tight mb-6 md:text-6xl">
            {t("hero.tagline")}
          </h1>
          <h2 className="font-sans font-bold text-2xl tracking-tight mb-12">
            116 Blackburn Road,
            <br />
            Doncaster East, VIC, 3109
          </h2>
          <a
            href="https://www.hotdoc.com.au/medical-centres/doncaster-east-VIC-3109/doncaster-east-family-medical-centre/doctors"
            target="_blank"
            rel="noreferrer"
            className="w-max 
            flex items-center 
            font-bold uppercase tracking-widest text-white md:text-green-700
            border-2 border-white md:border-green-700 rounded 
            p-4 mb-12 mx-auto md:mx-0 
            shadow-none 
            inline-block 
            transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-25 hover:scale-105 hover:no-underline hover:opacity-100"
          >
            <StaticImage
              src="../../../content/assets/hotdoc.png"
              alt="Book appointment on HotDoc"
              className="w-16"
            />
            <span className="ml-3 align-middle">{t("hero.button")}</span>
          </a>
          <h2 className="font-sans text-xl">
            {t("hero.phone")}{" "}
            <a className="font-bold" href="tel:98428585">
              9842 8585
            </a>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default withTrans(Hero)

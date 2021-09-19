import React from "react"
import { withTrans } from "../../i18n/withTrans"
import Header from "../header"

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

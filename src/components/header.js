import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { withTrans } from "../i18n/withTrans"
import LanguageMenu from "./languageMenu"
import Defmc from "../../content/assets/defmc"
import QPA from "../../content/assets/QPA_standard_logo_sm.jpg"

const NavLink = ({ to, children }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-120}
      duration={500}
    >
      {children}
    </Link>
  )
}

const Header = ({ t }) => {
  return (
    <nav className="z-10 sticky top-0 shadow-sm bg-white font-sans flex justify-around py-4 items-center text-primary flex-col md:flex-row">
      <div className="flex flex-col items-start gap-2 hidden md:block">
        <small className="text-xs">Doncaster East {t("fmc")}</small>
        <Defmc className="h-8 w-auto mt-1 mb-2" />
        <small className="text-gray-500 text-xs">
          A Fully Accredited Practice with{" "}
          <a href="https://www.qpa.health/" target="_blank" rel="noreferrer">
            <img src={QPA} width="96" className="m-0 inline-block" />
          </a>
        </small>
      </div>
      <Defmc className="h-8 w-auto mb-5 block md:hidden" />
      <div className="navigation flex items-center gap-5 text-xs md:text-lg">
        <NavLink to="services">Services</NavLink>
        <NavLink to="team">Team</NavLink>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
        <span>|</span>
        <LanguageMenu />
      </div>
    </nav>
  )
}

export default withTrans(Header)

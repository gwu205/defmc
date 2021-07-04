import React from "react"
import Doctor from "../../../content/assets/doctor.svg"

const Hero = () => {
    return (
      <section className="bg-primary">
        <div className="flex max-w-screen-md mx-auto flex-wrap">
          <div className="w-full md:w-1/2 flex items-center justify-center pt-12 md:pt-0">
            <img className="h-96 mb-0" src={ Doctor } />
          </div>
          <div className="section py-12 md:py-24 w-full md:w-1/2 text-center md:text-left">
            <h1 
              className="font-sans text-xl text-white">
                Your family medical care specialist
            </h1>
            <h2 
              className="heading-lg text-white py-4">
                Make an appointment online
              </h2>
            <a 
              href="https://www.hotdoc.com.au/medical-centres/doncaster-east-VIC-3109/doncaster-east-family-medical-centre/doctors"
              target="_blank"
              rel="noopener" 
              className="font-sans text-white border rounded p-4 my-4 shadow-none inline-block transition duration-300 ease-in-out transform hover:bg-primary hover:border-primary hover:scale-105 hover:no-underline hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span className="ml-3 align-middle">Schedule appointment</span>
            </a>
            <h2 
              className="font-sans text-white pt-4">
                Or call us at <a className="font-bold" href="tel:98428585">9842 8585</a>
            </h2>
          </div>
        </div>
      </section>
    )
}

export default Hero

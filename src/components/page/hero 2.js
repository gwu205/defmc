import React from "react"

const Hero = () => {
    return (
      <section className="bg-primary">
        <div className="section py-24 text-center">
          <h1 
            className="font-sans text-xl text-white">
              Your family medical care specialist
            </h1>
          <h2 
            className="heading-lg text-white py-4">
              Make an appointment online
            </h2>
          <a 
            href="#" 
            className="font-sans text-white border rounded p-4 my-4 shadow-none inline-block transition duration-300 ease-in-out transform hover:bg-secondary hover:border-primary hover:scale-105 hover:no-underline">
              Schedule appointment
          </a>
          <h2 
            className="font-sans text-white pt-4">
              Or call us at <a className="font-bold" href="tel:98428585">9842 8585</a>
          </h2>
        </div>
      </section>
    )
}

export default Hero

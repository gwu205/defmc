import React from "react"

const Map = () => {
    return (
        <section className="section py-24 flex flex-wrap md:flex-nowrap">
            <article className="w-full md:w-80 mr-0 md:mr-12 flex flex-col justify-center text-xl text-center md:text-left">
                <h2 className="heading-lg mb-6">
                    Find us
                </h2>
                <p>
                    116 Blackburn Road, Doncaster East, VIC, 3109
                </p>
                <p className="mt-4">
                    Ph:&nbsp;
                    <a href="tel:98428585">
                        9842 8585
                    </a>
                </p>
                <p className="mt-4">
                    <a href="https://www.facebook.com/defmc116" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="#7E4184"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
                        <span className="ml-4 align-middle">/defmc116</span>
                    </a>
                </p>
            </article>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9275905730497!2d145.15960601512717!3d-37.79173667975634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad638f5b377338f%3A0x133922b28603b086!2sDoncaster%20East%20Family%20Medical%20Centre!5e0!3m2!1sen!2sjp!4v1621600650559!5m2!1sen!2sjp"
              className="border-0 w-full h-96"
              allowfullscreen=""
              loading="lazy"
            />
        </section>
    )
}

export default Map

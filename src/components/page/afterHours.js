import React from "react"
import HealthSick from "../../../content/assets/health-sick.svg"

const AfterHours = () => {
    return (
        <section className="bg-lightgray">
            <div className="section py-24 flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img src={HealthSick} />
                </div>
                <article className="w-full md:w-1/2 flex flex-col justify-content pl-0 md:pl-8">
                    <h3 className="heading-lg mb-4 text-center md:text-left">After hours care</h3>
                    <p>
                        If you require immediate or urgent medical attention outside of DEFMC's opening hours, there are several local services which may still be available
                    </p>
                    <p className="font-bold">
                        Triple Zero Emergency
                    </p>
                    <p>
                        Tel: 000
                    </p>
                    <p className="font-bold">
                        After Hours GPs Clinic (open until 11.30pm nightly)
                    </p>
                    <p>
                        36 Wellington Road<br/>
                        Box Hill 3128<br/>
                        Tel: 9899 9980
                    </p>
                    <p className="font-bold">
                        Locum Service (24hr service)
                    </p>
                    <p>
                        Tel: 9429 5677
                    </p>
                </article>
            </div>
        </section>
    )
}

export default AfterHours

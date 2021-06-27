import React from "react"
import TeamCard from "./teamCard"

const Team = () => {
    return (
        <section className="section py-24 grid grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            <div className="team-content col-span-2 row-span-2 flex justify-center flex-col mb-4 md:mb-0">
                <h2 className="heading-lg mb-4 text-center md:text-left">
                    Meet the team
                </h2>
                <p>
                    All our doctors are fully experienced in caring for patients of all ages and highly dedicated to our patients. 
                </p>
                <p>
                    We are committed to providing high quality medical care six days a week from our location on Blackburn Road.
                </p>
                <p>
                    As always, we strive to provide a personalised, wholistic, high-quality family medical care for our patients.
                </p>
            </div>
            <TeamCard img="https://via.placeholder.com/48" name="Dr. Lawrence Wu" qualification="MBBS Dp Med Acup" />
            <TeamCard img="https://via.placeholder.com/48" name="Dr. Rose Thanenthiran" qualification="MBBS, FRACGP" />
            <TeamCard img="https://via.placeholder.com/48" name="Lawrence Wu" qualification="MBBS Dp Med Acup" />
            <TeamCard img="https://via.placeholder.com/48" name="Lawrence Wu" qualification="MBBS Dp Med Acup" />
        </section>
    )
}

export default Team

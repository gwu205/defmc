import React from "react"

import Slider from "react-slick"
import SliderContainer from "./sliderContainer"
import SliderList from "./sliderList"

import healthElderly from "../../../content/assets/health-elderly.svg"
import healthMeditation from "../../../content/assets/health-meditation.svg"
import healthVaccineRow from "../../../content/assets/health-vaccine-row.svg"
import healthSolution from "../../../content/assets/health-solution.svg"

const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
}

const PracticeInfo = () => {
    return (
        <Slider {...settings} className="overflow-hidden bg-lightgray">
            <SliderContainer image_src={healthElderly}>
                <h3 className="heading-lg">Personalised healthcare</h3>
                <SliderList items={["Women's and Men's Health",
                                    "Children's Health and Immunisation",
                                    "Travel Vaccinations",
                                    "Wound Care & Minor operations",
                                    "Pre-employment & Insurance Medicals",
                                    "Occupational Health"]} />
            </SliderContainer>
            <SliderContainer image_src={healthMeditation}>
                <h3 className="heading-lg">Chronic disease management</h3>
                <SliderList items={['Health Assessment & Care Plans',
                                    'Diabetic management including access to credentialed Diabetic educator']} />
            </SliderContainer>
            <SliderContainer image_src={healthVaccineRow}>
                <h3 className="heading-lg">Specialised services</h3>
                <SliderList items={["Acupuncture",
                                    "Contraceptive Advice including Implanon insertion"]} />
            </SliderContainer>
            <SliderContainer image_src={healthSolution}>
                <h3 className="heading-lg">Pathology</h3>
                <p className="mt-6">
                    Australian ClinicalLabs provides an on-site pathology service from:<br/>Mon-Fri: 8.00am to 12.30pm
                </p>
            </SliderContainer>
        </Slider>
    )
}

export default PracticeInfo

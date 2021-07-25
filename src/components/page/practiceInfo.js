import React from "react"
import Slider from "react-slick"
import SliderContainer from "./sliderContainer"
import SliderList from "./sliderList"
import { withTrans } from "../../i18n/withTrans"

import healthElderly from "../../../content/assets/health-elderly.svg"
import healthMeditation from "../../../content/assets/health-meditation.svg"
import healthVaccineRow from "../../../content/assets/health-vaccine-row.svg"
import healthSolution from "../../../content/assets/health-solution.svg"

const settings = {
  infinite: true,
  autoplay: true,
  dots: true,
}

const PracticeInfo = ({ t }) => {
  return (
    <Slider {...settings} className="overflow-hidden bg-lightgray py-8">
      <SliderContainer image_src={healthElderly}>
        <h3 className="heading-lg">{t("practice.title_1")}</h3>
        <SliderList items={t("practice.content_1")} />
      </SliderContainer>
      <SliderContainer image_src={healthMeditation}>
        <h3 className="heading-lg">{t("practice.title_2")}</h3>
        <SliderList items={t("practice.content_2")} />
      </SliderContainer>
      <SliderContainer image_src={healthVaccineRow}>
        <h3 className="heading-lg">{t("practice.title_3")}</h3>
        <SliderList items={t("practice.content_3")} />
      </SliderContainer>
      <SliderContainer image_src={healthSolution}>
        <h3 className="heading-lg">{t("practice.title_4")}</h3>
        <p className="mt-6">{t("practice.content_4")}</p>
      </SliderContainer>
    </Slider>
  )
}

export default withTrans(PracticeInfo)

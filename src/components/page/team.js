import React from "react"
import { withTrans } from "../../i18n/withTrans"
import { Trans } from "react-i18next"
import TeamCard from "./teamCard"
import Lawrence from "../../../content/assets/doctor_lawrence.jpg"
import Sathi from "../../../content/assets/doctor_sathi.jpeg"
import Rose from "../../../content/assets/doctor_rose.jpeg"

const Team = ({ t }) => {
  return (
    <section
      id="team"
      className="section py-24 grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-5"
    >
      <div className="team-content flex justify-center flex-col">
        <h2 className="heading-lg mb-4 text-center md:text-left">
          {t("team.title")}
        </h2>
        {t("team.content").map((p) => {
          return <p>{p}</p>
        })}
        <p>
          <Trans i18nKey="team.link">
            <a
              href="https://www.hotdoc.com.au/medical-centres/doncaster-east-VIC-3109/doncaster-east-family-medical-centre/doctors"
              target="_blank"
              rel="noreferrer"
            >
              hotdoc
            </a>
          </Trans>
        </p>
      </div>
      <TeamCard
        img={Lawrence}
        name="Dr. Lawrence Wu"
        qualification="MBBS Dp Med Acup"
        languages={`English, ${t("chinese")}`}
        bio={t("team.lawrence_bio")}
      />
      <TeamCard
        img={Rose}
        name="Dr. Rose Thanenthiran"
        qualification="MBBS, FRACGP"
        languages="English, Tamil"
        bio={t("team.rose_bio")}
      />
      <TeamCard
        img={Sathi}
        name="Sathiya Sivanesan"
        qualification="MBBS"
        languages="English, Tamil"
        bio={t("team.sathi_bio")}
      />
    </section>
  )
}

export default withTrans(Team)

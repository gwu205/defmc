import React from "react"
import { withTrans } from "../../i18n/withTrans"
import TeamCard from "./teamCard"
import Defmc from "../../../content/assets/defmc"

const Team = ({ t }) => {
  return (
    <section className="section py-24 grid grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-2 gap-4">
      <div className="team-content col-span-2 row-span-2 flex justify-center flex-col mb-4 md:mb-0">
        <h2 className="heading-lg mb-4 text-center md:text-left">
          {t("team.title")}
        </h2>
        {t("team.content").map((p) => {
          return <p>{p}</p>
        })}
      </div>
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
        name="Dr. Lawrence Wu"
        qualification="MBBS Dp Med Acup"
        languages={t("chinese")}
      />
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown"
        name="Dr. Rose Thanenthiran"
        qualification="MBBS, FRACGP"
        languages="Tamil"
      />
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown"
        name="Sathiya Sivanesan"
        qualification="MBBS"
        languages="Tamil"
      />
      <div className="flex items-center justify-center bg-primary rounded bg-lightgray">
        <Defmc className="w-32" />
      </div>
      {/* <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light"
        name="Ms Francisa Man"
        qualification={t("team.educator")}
      /> */}
    </section>
  )
}

export default withTrans(Team)

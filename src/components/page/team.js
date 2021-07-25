import React from "react"
import { withTrans } from "../../i18n/withTrans"
import TeamCard from "./teamCard"

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
      />
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown"
        name="Dr. Rose Thanenthiran"
        qualification="MBBS, FRACGP"
      />
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown"
        name="Sathiya Sivanesan"
        qualification="MBBS"
      />
      <TeamCard
        img="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light"
        name="Ms Francisa Man"
        qualification="Diabetic Educator"
      />
    </section>
  )
}

export default withTrans(Team)

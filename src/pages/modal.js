import React, { useEffect } from "react"

export default function Modal() {
  const [visible, setVisible] = React.useState(false)
  useEffect(() => {
    let pop_status = sessionStorage.getItem("pop_status")
    if (!pop_status) {
      setVisible(true)
      sessionStorage.setItem("pop_status", 1)
    }
  }, [])
  if (!visible) return null

  const Close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  const Warning = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  )

  return (
    <div className="flex items-center justify-center modal p-4">
      <div className="relative bg-white shadow-2xl max-w-xl py-12 px-8 rounded border-t-8 border-red-400">
        {/* <div
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-300 hover:text-gray-500 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          {Close}
        </div> */}
        <article className="mb-8">
          <h2 className="heading-lg mb-8 flex items-center justify-center gap-2">
            {Warning}
            COVID-19 Precautions
            {Warning}
          </h2>
          <p>
            <strong>
              Please do not make any in-person consultations at the clinic in
              case you have any flu-like symptoms.
            </strong>
          </p>
          <p>
            Get tested immediately if you have the following symptoms including
            fever, chills or sweats, cough, sore throat, shortness of breath,
            runny nose and loss or change in sense of smell or taste.
          </p>
          <p>
            For any further advice please check{" "}
            <a href="https://coronavirus.vic.gov.au" target="_blank">
              coronavirus.vic.gov.au
            </a>
            .
          </p>
          <hr className="h-px my-8" />
          <p>
            如果你有任何疑似流感病症，請立刻去做新冠病毒檢查，沒需要來診所侯診，
            請查看
            <a href="https://coronavirus.vic.gov.au" target="_blank">
              coronavirus.vic.gov.au
            </a>
          </p>
        </article>
        <button
          className="w-full p-4 border rounded border-primary hover:bg-gray-100"
          onClick={() => setVisible(false)}
        >
          I understand
        </button>
      </div>
    </div>
  )
}

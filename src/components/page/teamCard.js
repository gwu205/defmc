import React from "react"

class TeamCard extends React.Component {
  render() {
    const { img, name, qualification, languages } = this.props

    return (
      <div className="text-center rounded bg-lightgray hover:bg-gray-100 p-4">
        <img className="w-16 mb-2 mx-auto" src={img} />
        <h4 className="font-bold">{name}</h4>
        <p>{qualification}</p>
        <div className="inline-flex items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <small>{languages}</small>
        </div>
      </div>
    )
  }
}

export default TeamCard

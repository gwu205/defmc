import React from "react"

class TeamCard extends React.Component {
    render () {
        const { img, name, qualification } = this.props

        return (
            <div className="text-center rounded bg-lightgray p-4">
                <img className="w-16 mb-2 mx-auto" src={img}/>
                <h4 className="font-bold">{name}</h4>
                <p>{qualification}</p>
            </div>
        )
    }
}

export default TeamCard

import React from "react"

class SliderList extends React.Component {
    render () {
        const { items } = this.props
    
        return (
            <ul className="mt-6">
                {items.map((item, index) => { 
                    return ( 
                        <li className="relative" key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default SliderList

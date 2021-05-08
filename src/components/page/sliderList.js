import React from "react"

class SliderList extends React.Component {
    render () {
        const { items } = this.props
    
        return (
            <ul className="mt-6">
                {items.map(item => { 
                    return ( 
                        <li className="relative">
                            {item}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default SliderList

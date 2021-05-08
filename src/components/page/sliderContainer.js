import React from "react"

class SliderContainer extends React.Component {
    render () {
        const { children, image_src } = this.props
    
        return (
            <div className="section py-12 flex justify-center items-center">
                <img className="w-1/2" src={ image_src } />
                <div className="w-1/2">
                    { children }
                </div>
            </div>
        )
    }
}

export default SliderContainer

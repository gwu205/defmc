import React from "react"

class SliderContainer extends React.Component {
    render () {
        const { children, image_src } = this.props
    
        return (
            <div className="section py-12 flex flex-wrap md:flex-row flex-col-reverse justify-center items-center">
                <img className="w-full md:w-1/2 mt-6 md:mt-0" src={ image_src } />
                <div className="w-full md:w-1/2">
                    { children }
                </div>
            </div>
        )
    }
}

export default SliderContainer

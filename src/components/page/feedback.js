import React from 'react'
import DefmcLogo from '../../../content/assets/defmc_logo.svg'

const Feedback = () => {
    return (
        <article className="bg-secondary pt-16 pb-4 sm:py-16  text-white">
            <div className="section flex flex-wrap text-xs">
                <div className="w-full sm:w-1/3 pr-0 sm:pr-8 pb-6 sm:pb-0">
                    <h4 className="paragraph-heading">
                        Patient feedback
                    </h4>
                    <p>
                        Please direct all your queries to our Practice Manager, unless you feel your concern needs to be addressed outside the practice, please contact either of the following:
                    </p>
                </div>
                <div className="w-full sm:w-1/3 pb-8 sm:pb-0">
                    <p className="paragraph-heading">
                        Victorian Health Services Commissioner
                    </p>
                    <p>
                        Level 30, 570 Bourke Street<br/>
                        Melbourne 3000<br/>
                        Tel: 8601 5222
                    </p>
                    <p className="paragraph-heading">
                        Australian Health Practitioner Regulation Agency
                    </p>
                    <p>
                        Level 8, 111 Bourke Street<br/>
                        Melbourne 3000<br/>
                        Tel: 1300 419 4950
                    </p>
                </div>
                <div className="flex items-end justify-center sm:justify-end w-full sm:w-1/3">
                    <img className="w-24 mb-0" src={DefmcLogo} />
                </div>
            </div>
        </article>
    )
}

export default Feedback

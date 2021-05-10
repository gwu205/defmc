import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Faq = () => {
    return (
        <section class="section py-24">
            <h2 className="heading-lg text-center mb-8">Frequently asked questions</h2>
            <Tabs className="grid grid-cols-3">
                <TabList className="tab-list col-span-full md:col-span-1 pr-0 md:pr-4 mb-4 md:mb-0">
                    <Tab>General</Tab>
                    <Tab>Appointments</Tab>
                    <Tab>Fees & Billing</Tab>
                </TabList>

                <div className="col-span-full md:col-span-2">
                    <TabPanel>
                        <article>
                            <h4 className="paragraph-heading">
                                What are DEFMC’s privacy laws and policy on medical information management?
                            </h4>
                            <p>
                                It is our strict policy to maintain the absolute security for all our medical records. We respect that they are conﬁdential documents and none of the information will be accessed by any unauthorised personnel.
                            </p>
                            <p>
                                We will only release your medical records upon provision of a signed authority from yourself when you decide to seek medical care elsewhere or if you are moving to a different area.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                What is the Recall & Reminder System?
                            </h4>
                            <p>
                                All patients are automatically added to both the government run register and our recall system for PAP smears and immunisations. Please inform the doctors if you prefer not to be on this system.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                How do I make repeat prescriptions/referrals?
                            </h4>
                            <p>
                                Repeat prescriptions and referral letters are not available by phone. Please kindly make an appointment in case these are required.
                            </p>
                            <p>
                                Referral letters are usually valid for 12 months from any general practitioners and 3 months only from any other specialists. They will generally require to be renewed before seeing your specialist - please note that they are legally not allowed to be backdated.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                Is there disabled access to the building?
                            </h4>
                            <p>
                                We provide disabled parking at the back entrance and a wheelchair accessible toilet on premises.
                            </p>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article>
                            <h4 className="paragraph-heading">
                                Can I organise a longer consultation or an appointment for my family to be seen together?
                            </h4>
                            <p>
                                Please indicate when you ring for an appointment if a longer consultation is expected for complex or multiple problems. Double appointments are recommended for each individual members of your family to be seen together; if more than one family member is anticipated to be seen by the doctor, please book an appointment time for each member.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                Why was I not seen at my scheduled time?
                            </h4>
                            <p>
                                Our doctors are equally committed to being on time and the maintenance of the high quanity of care, so it is possible that you might not be seen at your scheduled time due to longer than normal time spent on some patients with complicated issues and unexpected emergencies.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                Does DEFMC cater for walk-ins?
                            </h4>
                            <p>
                                Walk-ins are catered for as long as we are able to ﬁt you in, but appointments are strongly recommended. Patients with appointments are generally prioritised to be seen before those without an appointment. Please let us know as soon as possible if you are unable to make your appointment - adequate notice for cancellations is much appreciated, both by us and by the other patients.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                Do I need to make an appointment to discuss test results?
                            </h4>
                            <p>
                                A normal appointment is required to discuss your test results with the doctor. They are generally not available over the phone and our receptionists are not medically qualiﬁed to discuss them with you. We make every effort to call you regarding your results requiring further discussion, but it is your onus to make an effort to find out if any action needs to be taken for your results.
                            </p>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article>
                            <h4 className="paragraph-heading">
                                Does DEFMC bulk bill?
                            </h4>
                            <p>
                                Normal fees apply for all consultations. The first visit will be billed at the normal private rate regardless of age and concession card status. After the first visit, Pensioners, Health Care Card holders and children under 16 will be bulk billed Monday to Friday. Higher fees apply for Saturday and once again irrespective of age and concession card status. Please note higher fees also apply for longer consultation.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                What payment methods does DEFMC accept?
                            </h4>
                            <p>
                                We accept cash, cheque and payment by EFTPOS and credit cards.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                How do I receive my Medicare rebate?
                            </h4>
                            <p>
                                Consultation fees attract a Medicare rebate if eligible and you can have your rebate deposited into your account if you have registered your bank account details with Medicare or if you can provide us with your BSB and Account numbers.
                            </p>
                        </article>
                        <article>
                            <h4 className="paragraph-heading">
                                Why did I incur a $10 administration fee after my consultation?
                            </h4>
                            <p>
                                Accounts need to be settled at the time of consultation, otherwise an administration fee of $10 will apply to accounts not settled on the day of consultation.
                            </p>
                        </article>
                    </TabPanel>
                </div>
            </Tabs>
        </section>
    )
}

export default Faq

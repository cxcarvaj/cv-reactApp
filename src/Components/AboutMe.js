import React from 'react'

const AboutMe = () => {
    return (
        <div>
            <section className="about-me-section" data-section="aboutMe">
                <div className="row">
                    <h2 className="heading-aboutMe">About Me</h2>
                    <div className="wraper">
                        <p className="legend">Young student with excellent cultural values, willing to use my knowledge as work tools to develop
                        and manage any task that is assigned to me successfully. I want to master topics such as
                        the Internet of Things, Data Science (Machine and Deep Learning),
                             Computer Security and Artificial Intelligence and Web Development.</p>
                        <div className="grid-container">
                            <article className="about-entry-box">
                                <div className="about-entry-inner">
                                    <div className="about-label">
                                        <div className="competency-icon1">
                                            <i className="icon-about-1" />
                                            <h4>Competencies</h4>
                                        </div>
                                        <ul>
                                            <li>Fast Learning.</li>
                                            <li>Ability to work under pressure.</li>
                                            <li>Ability to analyze and solve problems</li>
                                            <li>Teamwork skills</li>
                                            <li>Advanced mastery of Office Tools.</li>
                                            <li>Python</li>
                                            <li>Java</li>
                                            <li>MySQL</li>
                                            <li>React.js</li>
                                            <li>GitHub</li>
                                            <li>Advanced English.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="about-entry-box">
                                <div className="about-entry-inner">
                                    <div className="about-label">
                                        <div className="competency-icon1">
                                            <i className="icon-about-2" />
                                            <h4>Languages</h4>
                                        </div>
                                        <ul>
                                            <li>Native Spanish.</li>
                                            <li>English Advanced Level.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="about-entry-box">
                                <div className="about-entry-inner">
                                    <div className="about-label">
                                        <div className="competency-icon1">
                                            <i className="icon-about-3" />
                                            <h4>References</h4>
                                        </div>
                                        <ul>
                                            <li>Dra. Cármen Vaca</li>
                                            <dd>PhD in Information Technology <br/> and Professor at FIEC ESPOL.</dd>
                                            <dd><strong>Contact:</strong> cvacaec.espol.edu.ec</dd>
                                            <dd><strong>Relationshop:</strong>TAWS Club Mentor</dd>
                                            <li>Ing. Xavier Idrovo</li>
                                            <dd>Senior Developer in DevLab - 0lab</dd>
                                            <dd><strong>Contact:</strong> xidrovo.espol.edu.ec</dd>
                                            <dd><strong>Relationshop:</strong> Phycom Club Founder</dd>
                                            <li>Ing. Madelyne Velasco</li>
                                            <dd>Head of Technologies at Hermaprove S.A</dd>
                                            <dd><strong>Contact:</strong> mvelascoespol.edu.ec</dd>
                                            <dd><strong>Relationshop:</strong> Director of <br/> the "DataJam" Event.</dd>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
export default AboutMe
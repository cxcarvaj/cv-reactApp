import React from 'react'

const AboutMe = () => {
    return (
        <div>
            <section className="about-me-section" data-section="aboutMe">
                <div className="row">
                    <h2 className="heading-aboutMe">About Me</h2>
                    <div className="wraper">
                        <div className="grid-container">
                            <article className="about-entry-box">
                                <div className="about-entry-inner">
                                    <div className="about-label">
                                    <div className="competeny-icon1">
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
                                    <div className="competeny-icon1">
                                        <i className="icon-about-2" />
                                        <h4>Languages</h4>
                                    </div>
                                        <ul>
                                            <li>Español Nivel Avanzado.</li>
                                            <li>Ingles Nivel Avanzado.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="about-entry-box">
                                <div className="about-entry-inner">
                                    <div className="about-label">
                                    <div className="competeny-icon1">
                                        <i className="icon-about-3" />
                                        <h4>References</h4>
                                    </div>
                                        <ud>
                                            <li>Dra. Cármen Vaca</li>
                                                <dd>PhD in Information Technology and Professor at FIEC ESPOL.</dd>
                                                <dd><strong>Contact:</strong> cvacaec.espol.edu.ec</dd>
                                                <dd><strong>Relationshop:</strong>TAWS Club Mentor</dd>
                                            <li>Ing. Xavier Idrovo</li>
                                                <dd>Senior Developer in DevLab - 0lab</dd>
                                                <dd><strong>Contact:</strong> xidrovo.espol.edu.ec</dd>
                                                <dd><strong>Relationshop:</strong> Phycom Club Founder</dd>
                                            <li>Ing. Madelyne Velasco</li>
                                                <dd>Head of Technologies at Hermaprove S.A</dd>
                                                <dd><strong>Contact:</strong> mvelascoespol.edu.ec</dd>
                                                <dd><strong>Relationshop:</strong> Director of the "DataJam" Event.</dd>
                                        </ud>
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
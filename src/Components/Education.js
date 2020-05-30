import React from 'react'

const Education = () => {
  return (
    <div>
      <section className="education" data-section="education">
        <div className="row">
          <h2 className="heading-education">Education
          <div>
              <span className="sub-heading-education">Academic Career</span>
            </div>
          </h2>
        </div>
        <div className="wraper">
          <div className="education-centered">
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="education-icon color-1">
                  <i className="icon-book" />
                </div>
                <div className="education-label">
                  <h2>Bachelor of Science with a specialty in Mathematical Physicist
                    <div>
                      <span>Academia Naval Almirante Illingworth | 2016</span>
                    </div>
                  </h2>
                  <ul>
                    <li>Language B1+ (English) - Higher/Intermediate English Level.</li>
                    <li>Language and literature (Spanish) - Higher level.</li>
                    <li>Mathematics - Higher Level.</li>
                    <li>Physics - Higher Level</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="education-icon color-2">
                  <i className="icon-book" />
                </div>
                <div className="education-label">
                  <h2>Ingeniería en Ciencias Computacionales / Computer Science<div><span>Escuela Superior Politécnica del Litoral | 2017-En curso</span></div></h2>
                  <ul>
                    <li>Academic Distinction Scholarship 2017-2018.</li>
                    <li>Programming Fundamentals (Python).</li>
                    <li>Object-Oriented Programming (Java).</li>
                    <li>Database Systems (MySQL).</li>
                    <li>Data Structure (Java).</li>
                    <li>Descriptive and Inferential Statistics.</li>
                    <li>Systems Programming (C).</li>
                    <li>Software Design.</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="education-icon color-3">
                  <i className="icon-book" />
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
              </div>
            </article>
          </div>
        </div>
      </section>
      <div>
        <section className="about-me-section" data-section="aboutMe">
          <div className="row">
            <h2 className="heading-aboutMe">Certificates & Courses</h2>
            <div className="wraper">
              <div className="grid-container">
                <article className="about-entry-box">
                  <div className="about-entry-inner">
                    <div className="about-label">
                      <div className="competency-icon1">
                        <i className="icon-about-1" />
                        <h4>Certificates</h4>
                      </div>
                      <ul>
                        <li>ECCE Certification B2-CEFR.</li>
                        <li>Introduction to Web Development (HTML, CSS, Js, React.js) - Google Activate</li>
                        <li>Certificate of having completed the 18 levels of English at CEN</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="about-entry-box">
                  <div className="about-entry-inner">
                    <div className="about-label">
                      <div className="competency-icon1">
                        <i className="icon-about-2" />
                        <h4>Courses</h4>
                      </div>
                      <ul>
                        <li>Centro Ecuatoriano Norteamericano - Regular Program.</li>
                        <li>Centro Ecuatoriano Norteamericano - ECCE Preparation B2-CEFR Certification</li>
                        <li>MOOC ESPOL of Digital Collaboration Tools.</li>
                        <li>Machine Learning: Data Science in Python - Udemy.</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

      </div >
    </div>
  )
}
export default Education
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
                  <i className="icon-boo" />
                </div>
                <div className="education-label">
                  <h2>Bachiller en Ciencias con especialidad en Físico Matemáticas
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
                <div className="education-label">
                  <h2>Further Education
                    <div><span>2022-Future...</span></div>
                  </h2>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="education-icon color-none">
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Education
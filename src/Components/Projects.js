import React from 'react'

const Projects = () => {
  return (
    <div>
      <section className="education" data-section="education">
        <div className="row">
          <h2 className="heading-education">Projects
          <div>
              <span className="sub-heading-education">Projects I have worked on</span>
            </div>
          </h2>
        </div>
        <div className="wraper">
          <div className="education-centered">
            <article className="education-entry-box">
              <div className="education-entry-inner">
              <div className="education-icon color-none">
                </div>
                <div className="project-label">
                  <h2>Implementation of an Application Connected to a Database.
                    <div>
                      <span>Master Wings | 2019</span>
                    </div>
                  </h2>
                  <dd><p className="legend">Experience using MySQL and MySQLWorkbench for the creation and management of a database
                    to take inventory control at the "Master Wings" restaurant using a functional application written in Java.</p></dd>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="project-label">
                  <h2>Development of a C application to download files using the client - server and encryption model.<div>
                    <span>Systems Programming - ESPOL | 2019-2020</span></div>
                  </h2>
                  <dd><p className="legend">Experience handling the C programming language and libraries such as Diffie-Helman
                  to establish a secure connection and Blowfish for file encryption, both used in the development of this
                  "Client-Server" app that allows files to be uploaded and downloaded to and from a server encrypting its
                  content during transmission.</p></dd>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="project-label">
                  <h2>Hyperspectral Image Analysis (Cocoa)
                    <div>
                      <span>Robotics and Vision Center - ESPOL | 2019-2020</span>
                    </div>
                  </h2>
                  <dd><p className="legend">Experience using Hyper-Spectral equipment and related technologies for taking
                  Hyper-Spectral photos of fruits such as cocoa to analyze their index / degree of fermentation.</p></dd>
                </div>
              </div>
            </article>
            <article className="education-entry-box">
              <div className="education-entry-inner">
                <div className="education-label">
                  <h2>Further Projects Comming...
                    <div><span>2020-Future...</span></div>
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
export default Projects
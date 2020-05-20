import React from 'react'
import '../Css/style.css'
import me from '../Images/me.jpeg'

const Sidebar = (props) => {
    return (
        <div>
            <div>
                <nav href="#navbar" className="nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"></nav>
                <aside id="aside" className="border">
                    <div className="text-center">
                        {/* <div className="profile-img"/> */}
                        {/* <div className="author-img" style={{ backgroundImage: `url(${me})` }} /> */}
                        <div className="profile-img"><img className="profile-pic" src={me} alt="profile"></img></div>
                        <h1 id="name"><a href="index.html">Carlos Carvajal</a></h1>
                    </div>
                    <nav id="main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#intro" data-nav-section="home">Introducción</a></li>
                                <li><a href="#about" data-nav-section="about">Acerca de Mi</a></li>
                                <li><a href="#education" data-nav-section="education">Educación</a></li>
                                <li><a href="#projects" data-nav-section="projects">Proyectos</a></li>
                                <li><a href="#logros" data-nav-section="achievements">Logros</a></li>
                            </ul>
                        </div>
                    </nav>
                    <aside id="social-aside">
                    <nav id="social-menu" className="socialNavbar">
                        <ul>
                        <li><a href="https://twitter.com/_CarlosXavier98" target="_blank" rel="noopener noreferrer"><i className="icon-twitter" />Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/carlos-xavier-carvajal-villegas-b7ba561a2" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" />Linkedin</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>Github</a></li>
                        </ul>
                    </nav>
                    </aside>
                    <div className="footer">
                        <p>cxcarvaj@gmail.com</p>
                    </div>
                </aside>
            </div>
        </div>
    )

}
export default Sidebar
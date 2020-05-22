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
                        <h1 id="name"><a href="/">Carlos Carvajal</a></h1>
                    </div>
                    <nav id="main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="/AboutMe">About Me</a></li>
                                <li><a href="/Education">Education</a></li>
                                <li><a href="/Projects">Projects</a></li>
                                <li><a href="/Achievements">Achievements</a></li>
                            </ul>
                        </div>
                    </nav>
                    <aside id="social-aside">
                    <nav id="social-menu" className="socialNavbar">
                        <ul>
                        <li><a href="https://twitter.com/_CarlosXavier98" target="_blank" rel="noopener noreferrer"><i className="icon-twitter" />Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/carlos-xavier-carvajal-villegas-b7ba561a2" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" />Linkedin</a></li>
                        <li><a href="https://github.com/cxcarvaj" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>Github</a></li>
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
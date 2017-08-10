import React from 'react'

class Projects extends React.Component {
    render() {
        return(
            <section id="three" className="main style1 special">
                <div className="container">
                    <header className="major">
                        <h2>Projects</h2>
                    </header>
                    <p>A few things I have worked on.<br/>For more details check out my resume.</p>
                    <div id="project1" className="row 150%">
                        <div className="4u 12u$(medium)">
                            <span className="icon major devicon-android-plain-wordmark colored"></span>
                            <span className="image fit"><img src="images/pic02.jpg" alt="" /></span>
                            <h3>Minesweeper Flags</h3>
                            <p>Two player twist to the original Minesweeper game.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/louismenacho/Android-Minesweeper-Flag" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="4u 12u$(medium)">
                            <span className="icon major devicon-react-plain colored react-logo"></span>
                            <span className="image fit"><img src="images/pic03.jpg" alt="" /></span>
                            <h3>This Webpage</h3>
                            <p>My portfolio website is built on the React Framework</p>
                            <ul className="actions">
                                <li><a href="https://louismenacho.github.io/my-portfolio/" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <span className="icon major devicon-java-plain-wordmark colored"></span>
                            <span className="image fit"><img src="images/pic04.jpg" alt="" /></span>
                            <h3>Media Evaluation</h3>
                            <p>Estimated total price calculator for a list of ISBNs. </p>
                            <ul className="actions">
                                <li><a href="https://github.com/louismenacho/Media-Evaluation" className="button">More</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
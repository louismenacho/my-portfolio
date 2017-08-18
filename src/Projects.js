import React from 'react'

class Projects extends React.Component {
    render() {
        return(
            <section id="three" className="main style1 special">
                <div className="container">
                    <header className="major">
                        <h2>Projects</h2>
                    </header>
                    <p>Whether it's at work, school or at home I'm always experimenting with different technologies.<br/>
                        Check out some of my work.<br/>
                    </p>
                    <div id="project1" className="row 150%">
                        <div className="4u 12u$(medium)">
                            <span className="icon major devicon-android-plain-wordmark colored effect-bounce"></span>
                            <span className="image fit"><img src="images/pic02.jpg" alt="" /></span>
                            <h3>Minesweeper Flags</h3>
                            <p>Two player twist to the original Minesweeper game.<br/>
                                (Android, Java, XML)
                            </p>
                            <ul className="actions">
                                <li><a href="https://github.com/louismenacho/Android-Minesweeper-Flag" className="button">View Code</a></li>
                            </ul>
                        </div>
                        <div className="4u 12u$(medium)">
                            <span className="icon major devicon-react-plain colored effect-spin"></span>
                            <span className="image fit"><img src="images/pic03.jpg" alt="" /></span>
                            <h3>This Webpage</h3>
                            <p>Built with React.js, probably wasn't necessary but learned something new!<br/>
                                (React.js, HTML5, CSS3)
                            </p>
                            <ul className="actions">
                                <li><a href="https://github.com/louismenacho/my-portfolio" className="button">View Code</a></li>
                            </ul>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <span className="icon major devicon-java-plain-wordmark colored effect-pulse"></span>
                            <span className="image fit"><img src="images/pic04.jpg" alt="" /></span>
                            <h3>Media Evaluation</h3>
                            <p>Database and calculates total price value for a list of ISBNs.<br/>
                                (Java, Swing, MySQL)
                            </p>
                            <ul className="actions">
                                <li><a href="https://github.com/louismenacho/Media-Evaluation" className="button">View Code</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
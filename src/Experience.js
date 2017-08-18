import React from 'react'

class Experience extends React.Component {
    render() {
        var wwnorton = <a href="http://books.wwnorton.com/books/index.aspx"><b>W.W. Norton & Company, Inc.</b></a>;
        var googleCourse = <a href="https://cswithandroid.withgoogle.com"><b>Google - Applied CS with Android</b></a>;

        return(
            <section id="two" className="main style2">
                <div className="container">
                    <div className="row 150%">
                        <div className="6u 12u$(medium)">
                            <ul className="major-icons">
                                <li><span className="icon major devicon-java-plain-wordmark"></span></li>
                                <li><span className="icon major devicon-android-plain-wordmark"></span></li>
                                <li><span className="icon major devicon-javascript-plain"></span></li>
                                <li><span className="icon major devicon-react-original-wordmark"></span></li>
                                <li><span className="icon major devicon-html5-plain-wordmark"></span></li>
                                <li><span className="icon major devicon-github-plain-wordmark"></span></li>
                                {/*<li><img className="icon major firebase" src="images/firebase.svg" alt=""/></li>*/}
                            </ul>
                        </div>
                        <div className="6u$ 12u$(medium)">
                            <header className="major">
                                <h2>Experience</h2>
                            </header>
                            <p><b>{wwnorton}<br/>
                                Web Developer Intern</b><br/>
                                Utilized reference source to incorporate register/login function on StudySpaceweb pages.
                                Assisted in securing StudySpace website for HTTPS.
                                Implemented accessibility on StudySpace page using PayPal’s bootstrap accessibility plugin.
                                Completed site templates for the Norton StudySpace website.
                            </p>
                            <p><b>{googleCourse}<br/>
                                Student</b><br/>
                                Course by Google with a 4-week hands-on review of fundamental concepts of computer science such as data structure and algorithms.
                                Used game and graphical programming on the Android platform to strengthen and practice some of the principles studied in data structures and algorithms courses.
                                Worked cooperatively with a partner to come up with our own Android app to showcase.
                                Created Minesweeper Flags, a fun two player twist to the classic Minesweeper game.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
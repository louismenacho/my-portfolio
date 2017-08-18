import React from 'react'

class AboutMe extends React.Component {
    render() {
        var queensCollege = <a href="http://www.qc.cuny.edu/Pages/home.aspx"><b>Queens College</b></a>;
        var android = <a href="https://developer.android.com/index.html"><b>Android</b></a>
        var react = <a href="https://facebook.github.io/react/"><b>React</b></a>;
        var firebase = <a href="https://firebase.google.com/"><b>Firebase</b></a>

        return(
            <section id="one" className="main style1">
                <div className="container">
                    <div className="row 150%">
                        <div className="6u 12u$(medium)">
                            <header className="major">
                                <h2>A Little About Myself</h2>
                            </header>
                            <p>I’m a recent graduate from {queensCollege} in New York City with a B.A. in computer science.
                                Developing software and getting my feet wet with new libraries and frameworks such as {android}, {react} and {firebase} is one of my favorite hobbies.
                                To me, coding is an art and writing clean, concise, code that not only works but functions efficiently is what I strive for.
                                I love learning from experienced individuals and consider work an ongoing education.
                                <b> My primary goal</b> is to create something impactful with people that bring out the best in me.
                                When I'm away from the computer screen, I'm probably working out, hiking, or playing video games.
                            </p>
                            <p></p>
                        </div>
                        <div className="6u$ 12u$(medium) important(medium)">
                            <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;

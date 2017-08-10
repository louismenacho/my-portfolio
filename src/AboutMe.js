import React from 'react'

class AboutMe extends React.Component {
    render() {
        return(
            <section id="one" className="main style1">
                <div className="container">
                    <div className="row 150%">
                        <div className="6u 12u$(medium)">
                            <header className="major">
                                <h2>A Little About Myself</h2>
                            </header>
                            <p>I am a graduate eager to explore the different fields of the computer science industry and aim to impact society utilizing my technological skills. The key to this is by immersing myself with an organization that will become the future through the collaboration and efforts of a hard working team I wish to be a part of, concurrently fulfilling my passion as a programmer.</p>
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

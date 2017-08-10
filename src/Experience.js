import React from 'react'

class Experience extends React.Component {
    render() {
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
                            </ul>
                        </div>
                        <div className="6u$ 12u$(medium)">
                            <header className="major">
                                <h2>My Experiences<br />
                                    in the Industry</h2>
                            </header>
                            <p>My participation as a web dev intern at WWNorton & Company allowed me to encounter challenging situations and encounter real world problems. During my time in WWNorton I was able to utilize reference source to incorporate register/log in function on StudySpace web pages. I assisted  securing StudySpace website for HTTPS. My Implementation of accessibility for the StudySpace page using PayPal’s bootstrap accessibility plugin was successful. I was also responsible for completing site templates for the Norton StudySpace website using Visual Studios.</p>
                            <p>A challenge I encountered was being required to use a programming language as well as web dev concepts I was not familiar with. My first approach was to copy the code over to a sandbox created for me. I learned a bit of syntax using online resources and began experimenting by changing code where I did not fully understand what exact functionality was intended. By observing the the output from the changes made not only did I become familiar with the language and concepts but the conventions used at the company as well. Using this approach along with a bit of tutorials during my transportation rides, I felt like I definitely cut the learning curve to become productive as quick as possible.</p>

                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                            {/*<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>*/}
                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <section id="header">
                <div className="inner">
                    <span className="avatar"><img src="images/pic00.png" alt=""/></span>
                    <h1><strong>Louis Menacho</strong></h1>
                    <p>Welcome to my portfolio page</p>
                    <ul className="actions">
                        <li><a href="documents/Resume.pdf" className="button scrolly">Resume</a></li>
                        <li><a href="#three" className="button scrolly">Projects</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;
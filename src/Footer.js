import React from 'react'

class Footer extends React.Component {
    render() {
        return(
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.linkedin.com/in/louis-menacho-420379b5" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://github.com/louismenacho" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:menacho.louis@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Louis Menacho</li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    <li>Adapted by Louis Menacho</li>
                </ul>
            </section>
        );
    }
}

export default Footer;
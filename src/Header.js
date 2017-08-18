import React from 'react'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            opacity: 1,
            fading: true,
            index: 0,
            textCycle: [
                "I am a developer",
                "I am a problem solver",
                "I am a thinker",
                "I am a learner",
                "I am passionate",
            ]
        }
    }

    componentDidMount() {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            var fading = this.state.fading;
            var i = this.state.index;
            fading ? opacity -= .05 : opacity += .05;
            if (opacity < 0.0) {
                i === this.state.textCycle.length-1 ? i = 0 : i++;
                this.setState({
                    fading: !fading,
                    index: i,
                });
            }
            if(opacity > 1.0) {
                this.setState({
                    fading: !fading,
                });
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 60);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render() {
        return(
            <section id="header">
                <div className="inner">
                    <span className="avatar"><img src="images/pic00.png" alt=""/></span>
                    <h1>Hi, I'm <strong>Louis Menacho</strong> and <br/></h1>
                    <h1><i style={{opacity: this.state.opacity}}>{this.state.textCycle[this.state.index]}</i></h1>
                    <p>Welcome to my online portfolio!<br/> Have a look through some of my projects or <br/>simply scroll down to learn a bit more about me.</p>
                    <ul className="actions">
                        {/*<li><a href="documents/Resume.pdf" className="button scrolly"> Resume</a></li>*/}
                        <li><a href="#two" className="button scrolly">Experience</a></li>
                        <li><a href="#three" className="button scrolly">Projects</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;
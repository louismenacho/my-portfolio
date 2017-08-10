import React from 'react';
import Header from './Header'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <AboutMe/>
            <Experience/>
            <Projects/>
            <Footer/>
        </div>
    );
  }
}

export default App;




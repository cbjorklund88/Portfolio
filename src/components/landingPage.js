import React from "react"
import Project from "./Project.js"
import AboutYou from "./AboutYou/aboutyou"
import MyTech from "./MyTech/mytech"
import Button from "./Button/button"
import Footer from "./Footer/footer"
import Skills from "./Skills/skills"

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <AboutYou />
          <Button>see my github</Button>
          <MyTech />
          <Skills />
          <Button>See my Linkedin</Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App

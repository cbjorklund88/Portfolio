import React from "react"
import Project from "./Project.js"
import AboutYou from "./AboutYou/aboutyou"
import MyCases from "./MyCases/mycases"
import MyTech from "./MyTech/mytech"
import Button from "./Button/button"
import Footer from "./Footer/footer"
import Skills from "./Skills/skills"
import Studies from "./Studies/studies"

import projectsJson from "../projects.json"

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <AboutYou />
          <Button><a href="https://github.com/cbjorklund88" target="_blank">See my github</a></Button>
          <MyTech />
          <div className="MyCases">
            {projectsJson.cases.map(product => <MyCases
              title={product.title}
              image={product.image}
              id={product.id} />)}
          </div>
          <Skills />
          <Studies />
          <Button><a href="https://www.linkedin.com/in/clara-bj%C3%B6rklund-8b7776171/" target="_blank">See my Linkedin</a></Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default LandingPage

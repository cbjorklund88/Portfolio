import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import projectsJson from "../projects.json"
import Button from "./Button/button"
import Footer from "./Footer/footer"

class Project extends React.Component {

  render() {
    const id = this.props.match.params.id
    console.log(id)
    let project = {}
    projectsJson.cases.forEach(item => {
      if (item.id === id) {
        project = item
      }
    })
    return (
      <div>
        <div className="project-container">
          <Link to="/LandingPage">&#8656; Back</Link>
          <div className="heroImage">
            <img src={project.imageHero} alt="my Work" />
          </div>
          <div className="project-text-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <Button>See it live</Button>
          <div className="skills-list-projects-container">

            <div className="skillsListCode">
              <h5>Code</h5>
              <p>{project.code}</p>
            </div>
            <div className="skillsListToolbox">
              <h5>Toolbox</h5>
              <p>{project.Toolbox}</p>
            </div>
            <div className="skillsListMore">
              <h5>More</h5>
              <p>{project.More}</p>
            </div>
          </div>
          <Button>See it live</Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Project

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import projectsJson from "../projects.json"
import Button from "./Button/button"
import Footer from "./Footer/footer"

class Project extends React.Component {

  render() {
    const id = this.props.match.params.id
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
          <Button><a href="#" target="_blank">See it live</a></Button>
          <h2>tech specs</h2>
          <div className="skills-list-projects-container">
            <div className="skillsListCode">
              <h5>Code</h5>
              <ul>
                {project.code.map(item => <li>{item}</li>)}
              </ul>
            </div>
            <div className="skillsListToolbox">
              <h5>Toolbox</h5>
              <ul>
                {project.Toolbox.map(item => <li>{item}</li>)}
              </ul>
            </div>
            <div className="skillsListMore">
              <h5>More</h5>
              <ul>
                {project.More.map(item => <li>{item}</li>)}
              </ul>
            </div>
          </div>
          <Button><a href="#" target="_blank">view the code</a></Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Project

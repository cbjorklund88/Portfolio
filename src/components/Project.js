import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import projectsJson from "../projects.json"
import Button from "./Button/button"
import Footer from "./Footer/footer"

class Project extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
          <section className="go-back" onClick={this.props.history.goBack}>&#8656; Back</section>
          <div className="heroImage">
            <img src={project.imageHero} alt="my Work" />
          </div>
          <div className="project-text-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <Button><a href={project.urlLive} target="_blank">See it live</a></Button>
          <h2>tech specs</h2>
          <div className="skills-list-projects-container">
            <div className="skills-list-projects">
              <h5>Code</h5>
              <ul>
                {project.code.map(item => <li>{item}</li>)}
              </ul>
            </div>
            <div className="skills-list-projects">
              <h5>Toolbox</h5>
              <ul>
                {project.Toolbox.map(item => <li>{item}</li>)}
              </ul>
            </div>
          </div>
          <Button><a href={project.urlCode} target="_blank">view the code</a></Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Project

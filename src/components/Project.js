import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import productsJson from "../products.json"
import Button from "./Button/button"

class Project extends React.Component {

  render() {
    const id = this.props.match.params.id
    console.log(id)
    let project = {}
    productsJson.cases.forEach(item => {
      if(item.id === id) {
        project = item
      }
    })

    return (
      <div className="project-container">
        <Link to="/LandingPage">&#8656; Back</Link>
        <div className="heroImage">
          <img src={project.imageHero} alt="my Work" />
        </div>
        <div className="project-text-container">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Button>See it live</Button>
        </div>
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
    )
  }

}

export default Project

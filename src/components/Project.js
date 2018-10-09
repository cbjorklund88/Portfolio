import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import productsJson from "../products.json"

class Project extends React.Component {

  render() {


    const id = this.props.match.params.id
    console.log(id)
    let project = {}
    productsJson.cases.forEach(item => {
      if(item.id === id){
        project = item
      }
    })

    return (
      <div className="case-container">
      <Link to="/LandingPage">&#8656; Back</Link>
        <div className="heroImage">
          <img src={project.imageHero} alt="my Work" />
        </div>
        <h1>{project.title}</h1>
        </div>
    )
  }

}

export default Project

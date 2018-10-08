import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class Project extends React.Component {

  render() {
    return (
      <div className="case-container">
        <div className="heroImage">
          <Link to="/LandingPage">Back</Link>
          <img src="./Images/computer.jpg" alt="my Work" />
        </div>
      </div>
    )
  }

}

export default Project

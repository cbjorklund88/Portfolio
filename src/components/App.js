import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./LandingPage"
import Project from "./Project"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "LandingPage"
    }
  }

  goToBlog = () => {
    this.setState({ page: "Project" })
  }

  goToAbout = () => {
    this.setState({ page: "LandingPage" })
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={LandingPage} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route exact path="/Project" component={Project} />
          <Route path="/Project/:id" component={Project} />
        </div>
      </Router>
    )
  }

}

export default App

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import landingPage from "./LandingPage"
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
          <ul>
            <li><Link to="/LandingPage">Landing Page</Link></li>
            <li><Link to="/Project">Project page</Link></li>
          </ul>
          <Route path="/LandingPage" component={landingPage} />
          <Route path="/Project" component={Project} />
        </div>
      </Router>
    )
  }

}

export default App

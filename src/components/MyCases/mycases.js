import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class MyCases extends React.Component {

  render() {
    return (
      <div className="Cases">
        <Link to={`/Project/${this.props.id}`}>
          <div className="case-title"><p>{this.props.title}</p></div>
          <div className="caseImage">
            <img src={this.props.image} alt="my project" />
          </div>
        </Link>
      </div>
    )
  }

}

export default MyCases

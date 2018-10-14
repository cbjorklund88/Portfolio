import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class MyCases extends React.Component {

  render() {
    return (
      <div className="Cases">
        <div className="cases-container">
          <Link to={`/Project/${this.props.id}`}>
            <p>{this.props.title}</p>
            <div className="caseImage">
              <img src={this.props.image} alt="hero" />
            </div>
          </Link>
        </div>
      </div>
    )
  }

}

export default MyCases

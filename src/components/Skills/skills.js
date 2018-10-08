import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <div className="skillsList">
          <div className="skillsListCode">
            <h5>Code</h5>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Javascript</p>
            <p>SASS</p>
            <p>GitHub</p>
          </div>
          <div className="skillsListToolbox">
            <h5>Toolbox</h5>
            <p>Atom</p>
            <p>Postman</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Keynote</p>
          </div>
          <div className="skillsListMore">
            <h5>More</h5>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills

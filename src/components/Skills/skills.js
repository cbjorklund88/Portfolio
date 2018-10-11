import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div className="skills-wrapper">
        <h2>Skills</h2>
        <div className="skillsList">
          <div className="skillsListCode">
            <h5>Code</h5>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React</p>
            <p>Javascript ES6</p>
            <p>SASS</p>
          </div>
          <div className="skillsListToolbox">
            <h5>Toolbox</h5>
            <p>Atom</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Terminal</p>
          </div>
          <div className="skillsListMore">
            <h5>More</h5>
            <p>Agile methodology</p>
            <p>Concept development</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills

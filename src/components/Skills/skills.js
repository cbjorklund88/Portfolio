import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div className="skills-wrapper">
        <h2>Skills</h2>
        <div className="skillsList">
          <div className="skillsListCode">
            <h5>Code</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Javascript ES6</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="skillsListToolbox">
            <h5>Toolbox</h5>
            <ul>
              <li>Atom</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Slack</li>
              <li>Trello</li>
              <li>Terminal</li>
            </ul>
          </div>
          <div className="skillsListMore">
            <h5>More</h5>
            <ul>
              <li>Agile methodology</li>
              <li>Concept development</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills

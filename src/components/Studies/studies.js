import React from "react"

class Studies extends React.Component {

  render() {
    return (
      <div>
        <h1>Studies</h1>
        <div className="studiesList">
          <div className="studiesListItem">
            <h5>Frontend developer</h5>
            <p>Full-time 12 w boot camp/intensive program. Covering everything
            from the basics of programming to how to structure and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50+ individual tasks(in HTML, CSS,
            Javascript, JSX, React, Node.js) and 6 sprints with demos togehter width
            companies like Volumental, Bonnier and Comprend.
            Sthlm Sep-Nov. 2018
            </p>
          </div>
          <div className="skillsListToolbox">
            <h5>Toolbox</h5>
            <p>Atom</p>
            <p>Postman</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Keynote</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Studies

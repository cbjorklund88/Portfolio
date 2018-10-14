import React from "react"

class Studies extends React.Component {

  render() {
    return (
      <div className="studies-wrapper">
        <h2>Studies</h2>
        <div className="studiesList">
          <div className="studiesListItemFirst">
            <h5>Frontend developer</h5>
            <p>
            Full-time 12 w boot camp/intensive program. Covering everything
            from the basics of programming to how to structure and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50+ individual tasks(in HTML, CSS,
            Javascript, JSX, React, Node.js) and 6 sprints with demos togehter width
            companies like Volumental, Bonnier and Comprend.
            Sthlm Sep-Nov. 2018
            </p>
          </div>
          <div className="studiesListItem">
            <h5>html and css 3</h5>
            <p>
            3 day intensive course. Build a portfolio
            in HTML&CSS. Ekskäret April. 2018
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Studies

import React from "react"
import Project from "./Project.js"
import AboutYou from "./AboutYou/aboutyou"
import Button from "./Button/button"

class App extends React.Component {

  render() {
    return (
      <div>
        <AboutYou />
        <Button />
      </div>
    )
  }

}

export default App

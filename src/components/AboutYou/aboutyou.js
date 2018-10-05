import React from "react"

class AboutYou extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="profileInfo">
          <img src="./Images/profile-image.png" alt="This is me" />
          <div className="aboutMeText">
            <h3>Clara Björklund</h3>
            <h1>Frontend Developer</h1>
            <p>Text om mig</p>
          </div>
        </div>
      </div>
    )
  }

}

export default AboutYou

import React from "react"

class AboutYou extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="profileInfo">
          <div className="profile-photo">
            <img src="./Images/clara.jpg" alt="This is me" />
          </div>
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

import React from "react"

class AboutYou extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="profileInfo">
          <img src="./Images/clara.jpg" alt="This is me" />
          <div className="aboutMeText">
            <h3>Clara Björklund</h3>
            <h1>Frontend Developer</h1>
            <p>Hello! 
            I’m a frontend developer that loves writing functional code and put my heart and head
            in to creating what the client want.
            For my background I have over 10 years of experience within
            customer service in different ways.
            So I have great people skills and a real team player! </p>
          </div>
        </div>
      </div>
    )
  }

}

export default AboutYou

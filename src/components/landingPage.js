import React from "react"
import Project from "./Project.js"
import AboutYou from "./AboutYou/aboutyou"
import MyCases from "./MyCases/mycases"
import MyTech from "./MyTech/mytech"
import Button from "./Button/button"
import Footer from "./Footer/footer"
import Skills from "./Skills/skills"
import Studies from "./Studies/studies"

import productsJson from "../products.json"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <AboutYou />
          <Button>See my github</Button>
          <MyTech />
          <div className="MyCases">
            {productsJson.cases.map(product =>
              <MyCases
                title={product.title}
                image={product.image} />)}
          </div>
          <Skills />
          <Studies />
          <Button>See my Linkedin</Button>
        </div>
        <Footer />
      </div>
    )
  }

}

export default LandingPage

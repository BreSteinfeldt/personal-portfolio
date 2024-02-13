import React from "react"; 
import "./Home.css";  
// import Me from "../../assets/about-me-placeholder.png"
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={me} alt="" className="home__img" /> */}
        <h1 className="home__name">Breanna Ho</h1>
        <span className="home__education">I'm a Full Stack Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
        
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home;
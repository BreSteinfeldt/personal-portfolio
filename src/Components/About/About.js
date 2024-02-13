import React from "react"; 
import "./About.css";  
import Image from "../../assets/about-me-placeholder.png"; 

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>

        <div className="about__data gird">
          <div className="about__info">
            <p className="about__description">I am a recent graduate of the Thinkful Engineering Immersion program, where I honed my skills in full-stack development. With a diverse background in creative, production, and project management, I am passionate about solving complex problems. My experience includes collaborating cross-functionally and steering projects from inception to completion. Armed with a creative perspective and strong organizational and problem-solving skills, I am now ready to make my mark in the world of software engineering.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-end Development</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage front-end__development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-end Development</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage back-end__development"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
    )
}

export default About;
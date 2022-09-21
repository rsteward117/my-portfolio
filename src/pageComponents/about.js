import react, {useState} from "react";
import Navbar from "../navigation/navbar";
import Sidebar from "../navigation/sidebar";
import '../styles/about.css'
import myPhoto from '../assets/my_photo.jpg'


function About(){
    return(
        <>  
        {/* the id inside the div is for react scroll so scroll has a point to scroll to */}
            <div className="about-main-container" id="about">
                <div className="name-title-container">
                    <h1>Hi, my name is Randy Steward</h1>
                    <h2>I'm an aspiring frontend web developer</h2>
                </div>
                <div className="about-grid-container">
                    <section className="my-portrait grid-cell">
                        <img src={myPhoto} alt="A picture of myself" />
                    </section>
                    <section className="my-story grid-cell">
                        <p>
                            I've been self teaching myself to code and program, In hopes to gain employment as an frontend developer. 
                            With this portfolio site I will demonstrate my skills and knowledge I've gathered so far on my self taught journey.
                        </p>
                    </section>
                    <section className="my-skills grid-cell">
                        <div className="my-skills-header"><h1>My Skills</h1></div>
                        <div className="skills-img-grid">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About;
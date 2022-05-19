import react, {useState} from "react";
import '../styles/projects.css'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
// 1:deploy the TOP final project with git hub pages to use for protfolio site
// 2:work on the slides for the projects



function Projects(){
    return(
        <>
        <div className="projects-main-container">
            <header>
                <h1>My Projects</h1>
            </header>
            <div className="my-projects-container">
                <AiOutlineLeft className="left-arrow"/>
                <section className="my-projects">
                    <div className="project-img">
                        <img src="" alt="" />
                    </div>
                    <div className="project-button-container">
                        <button>live Preview</button>
                        <button>View code</button>
                    </div>
                </section>
                <AiOutlineRight className="right-arrow" />
            </div>
        </div>
        </>
    )
}

export default Projects;

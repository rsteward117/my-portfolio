import react, {useState} from "react";
import '../styles/projects.css';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import weatherAppImage from "../assets/weather-app.png"
import etchASketchImage from "../assets/Etch-a-sketch.png"
import formProjectImage from "../assets/form-project.png"
import calculatorProjectImage from "../assets/calculator-project.png"
// 2:work on the slides for the projects



function Projects(){
//this is an array filled with ojects as its elemets each object contains images for my project, links to live preview of my projects, and links to github code for each projects
    const projectSliders = [
        {
            projectImage: weatherAppImage,
            projectLive: "https://rsteward117.github.io/weather-Project/",
            projectCode: "https://github.com/rsteward117/weather-Project"
        },
        {
            projectImage: etchASketchImage,
            projectLive: "https://rsteward117.github.io/Etch-a-Sketch-project/",
            projectCode: "https://github.com/rsteward117/Etch-a-Sketch-project"
        },
        {
            projectImage: formProjectImage,
            projectLive: "https://rsteward117.github.io/form-validation/",
            projectCode: "https://github.com/rsteward117/form-validation"
        },
        {
            projectImage: calculatorProjectImage,
            projectLive: "https://rsteward117.github.io/calculator/",
            projectCode: "https://github.com/rsteward117/calculator"
        }
    ]
    
    const [currentImage, setCurrentImage] = useState(0);
    const [currentLiveLink, setCurrentLiveLink] = useState(0);
    const [currentGithubCode, setCurrentGithubCode] = useState(0);
    const projectSlidersLength = projectSliders.length;
    function nextSlide(){
        //this function count each image in the array, and starts at the current image and to cylcle through the array of images it takes one image out of the array then move over once to the next image in the array. Once it got to the last image in the array it will reset back to the first image in the array and start a new cylcle
        setCurrentImage(currentImage === projectSlidersLength - 1 ? 0 : currentImage + 1);
        setCurrentLiveLink(currentLiveLink === projectSlidersLength - 1 ? 0 : currentLiveLink + 1);
        setCurrentGithubCode(currentGithubCode === projectSlidersLength - 1 ? 0 : currentGithubCode + 1);

    }

    function prevsSlide(){
        //this function similar the nextImage function it again starts at the current image which is 0 and take one step backwards in the array so if the image slider starts at the third image it will go back one step to the second image in the array.
        setCurrentImage(currentImage === 0 ? projectSlidersLength - 1 : currentImage - 1);
        setCurrentLiveLink(currentLiveLink === 0 ? projectSlidersLength - 1 : currentLiveLink - 1);
        setCurrentLiveLink(currentGithubCode === 0 ? projectSlidersLength - 1 : currentGithubCode - 1);
    }
    return(
        <>
        <div className="projects-main-container">
            <header>
                <h1>My Projects</h1>
            </header>
            <div className="my-projects-container">
                <AiOutlineLeft className="left-arrow" onClick={prevsSlide}/>
                <section className="my-projects">
                    <div className="project-img">
                        {projectSliders.map((slide, index) => {
                            return(
                                <div className={index === currentImage ? 'slide active' : 'slide' } key={index}>
                                    {index === currentImage && ( <img src={slide.projectImage} alt='a slide show of my projects' className="project-image"/>)}
                                </div>
                            )
                        })}
                    </div>
                    <div className="project-button-container">
                        {projectSliders.map((slide, index) => {
                            return(
                                <>
                                    {index === currentLiveLink && ( <a className="project-btn" href={slide.projectLive} target="_blank" >Live Preview</a>)}
                                </>
                            )
                        })}
                        {projectSliders.map((slide, index) => {
                            return(
                                <>
                                    {index === currentGithubCode && ( <a className="project-btn" href={slide.projectCode} target="_blank" >View Code</a>)}
                                </>
                            )
                        })}

                    </div>
                </section>
                <AiOutlineRight className="right-arrow" onClick={nextSlide}/>
            </div>
        </div>
        </>
    )
}

export default Projects;

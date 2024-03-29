import react, {useState} from "react";
import '../styles/contact.css';

function Contact (){

    return(
        <>
            {/* the id inside the div is for react scroll so scroll has a point to scroll to */}
            <div className="contact-main-container" id="contact">
                <header>
                    <h1>Contact Me</h1>
                </header>
                <div className="contact-links-container">
                    <section className="contact-link">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
                        <a href="mailto:rsteward117@gmail.com">rsteward117@gmail.com</a>
                    </section>
                    <section className="contact-link">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <a href="https://github.com/rsteward117" target="_blank">Github</a>
                    </section>
                    <section className="contact-link">
                        {/* remeber to come back to this once I make a linkedin account and link the account here. */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                        <a href="https://www.linkedin.com/in/randy-steward-6607191a6/" target="_blank">Linkedin</a>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact;
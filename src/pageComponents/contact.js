import react, {useState} from "react";
import '../styles/contact.css';

function Contact (){

    return(
        <>
            <div className="contact-main-container">
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
                        <a>Linkedin</a>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact;
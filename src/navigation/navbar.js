import react from 'react'
import "../styles/navbar.css"
import { Link } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import { click } from '@testing-library/user-event/dist/click'

function Navbar({ toggle }){

    return(
        <nav>
            <div className="nav-container">
                <div className="site-logo">
                    <h1>Randy's <span>Protfolio!</span></h1>
                </div>

                <div className="mobile-icon" onClick={toggle}>
                    <FaBars />
                </div>

                <div className='links-container' >
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='link' >
                        About
                    </Link>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='link' >
                        Projects
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className='link' >
                        Contact
                    </Link>
                </div>


            </div>
        </nav>
    )
}

export default Navbar;
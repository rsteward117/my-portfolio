import react from 'react'
import "../styles/navbar.css"
//reminder install react router dom and react icons.
import { Link } from 'react-router-dom'
//useable react icon
import {FaBars} from 'react-icons/fa'

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

                <div className='links-container'>
                    <a className='link' to="/">About</a>
                    <a className='link' to="/">Projects</a>
                    <a className='link' to="/">Contact</a>
                </div>


            </div>
        </nav>
    )
}

export default Navbar;
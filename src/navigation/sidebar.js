import react from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import "../styles/sidebar.css"

//just using styled components to style pass isOpen into it to create a if else statement to determine if the container should be shown on the page
const Sidebarcontainer = styled.aside`
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`


function Sidebar({isOpen, toggle}){
    return(
        <Sidebarcontainer className='sidebar-container' isOpen={isOpen} onClick={toggle}>
            <div className='sidebar-icon' onClick={toggle}>
                <FaTimes />
            </div>
            <div className='sidebar-menu'>
                <Link to="/" className='sidebar-link'>
                    About
                </Link>
                <Link to="/projects" className='sidebar-link'>
                    Projects
                </Link>
                <Link to="/contact" className='sidebar-link'>
                    Contact
                </Link>
            </div>
        </Sidebarcontainer>
    )
}

export default Sidebar;
import react from 'react'
import styled from 'styled-components'
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
                <a className='sidebar-link'>About</a>
                <a className='sidebar-link'>Projects</a>
                <a className='sidebar-link'>Contact</a>
            </div>
        </Sidebarcontainer>
    )
}

export default Sidebar;
import React from 'react';
import Button from './Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';


function Nav({ setCurrentlySelected }) {
    const [currentPage, setCurrentPage] = React.useState("about")
    // const [work, setWork] = React.useState(false)
    // const [projects, setProjects] = React.useState(false)
    // const [contact, setContact] = React.useState(false)
    // console.log(workComp.workComp, workComp.aboutComp)
    // setAbout(workComp.aboutComp);
    // setWork(workComp.workComp);
    // setProjects(true);
    // setContact(true);
    // function handleWork() {
    //     setAbout(false)
    // }
    function handleClick(e) {
        console.log(e.target.id)
        setCurrentPage(e.target.id)
        setCurrentlySelected(e.target.id)
    }
    return (

        <div>
            <ul>
                <li><Button buttonName={"About 2"} onClick={handleClick} buttonId="about" currentPage={currentPage} /></li>
                <li><Button buttonName={"Work 2"} onClick={handleClick} buttonId="work" currentPage={currentPage} /></li>
                <li><Button buttonName={"Projects 2"} onClick={handleClick} buttonId="projects" currentPage={currentPage} /></li>
                <li><Button buttonName={"Contact 2"} onClick={handleClick} buttonId="contact" currentPage={currentPage} /></li>
            </ul>


        </div>










    )
}

export default Nav;

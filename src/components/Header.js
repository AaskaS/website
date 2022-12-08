import React from 'react';
import Button from './Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';


function Header({ setCurrentlySelected }) {
    const [currentPage, setCurrentPage] = React.useState("about")
    const [display, setDisplay] = React.useState(false)
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

        <div className='mb-16'>

            {/* <div className='visible lg:hidden flex flex-col justify-center'>
                <ui>
                    <li>
                        <Button buttonName={"About2"} onClick={handleClick} buttonId="about" currentPage={currentPage} />
                    </li>
                    <li>
                        <Button buttonName={"Work2"} onClick={handleClick} buttonId="work" currentPage={currentPage} />
                    </li>
                    <li>
                        <Button buttonName={"Projects2"} onClick={handleClick} buttonId="projects" currentPage={currentPage} />
                    </li>
                    <li>
                        <Button buttonName={"Contact2"} onClick={handleClick} buttonId="contact" currentPage={currentPage} />
                    </li>
                </ui>




            </div> */}

            <div class="absolute right-0 top-0 visible lg:hidden flex items-center flex-col justify-center z-10 ">
                <nav>
                    <ul>
                        <li><Button buttonName={"About 2"} onClick={handleClick} buttonId="about" currentPage={currentPage} /></li>
                        <li><Button buttonName={"Work 2"} onClick={handleClick} buttonId="work" currentPage={currentPage} /></li>
                        <li><Button buttonName={"Projects 2"} onClick={handleClick} buttonId="projects" currentPage={currentPage} /></li>
                        <li><Button buttonName={"Contact 2"} onClick={handleClick} buttonId="contact" currentPage={currentPage} /></li>
                    </ul>
                </nav>

                {/* <Button buttonName={"About 2"} onClick={handleClick} buttonId="about" currentPage={currentPage} />
                <Button buttonName={"Work 2"} onClick={handleClick} buttonId="work" currentPage={currentPage} />
                <Button buttonName={"Projects 2"} onClick={handleClick} buttonId="projects" currentPage={currentPage} />
                <Button buttonName={"Contact 2"} onClick={handleClick} buttonId="contact" currentPage={currentPage} /> */}

            </div>

            <div class="xs:invisible lg:visible flex items-center flex-row space-x-4 justify-center  ">
                <Button buttonName={"About"} onClick={handleClick} buttonId="about" currentPage={currentPage} />
                <Button buttonName={"Work"} onClick={handleClick} buttonId="work" currentPage={currentPage} />
                <Button buttonName={"Projects"} onClick={handleClick} buttonId="projects" currentPage={currentPage} />
                <Button buttonName={"Contact"} onClick={handleClick} buttonId="contact" currentPage={currentPage} />

            </div>






        </div >



    )
}

export default Header;

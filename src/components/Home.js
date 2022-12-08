import React from 'react';
import logo from '../assets/logo.svg';
import placeholder from "../assets/smallmoon.jpg"
import Content from './About.js'
import Header from './Header.js'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
    return (

        <div>
            <div class="p-4 max-w-sm mx-auto rounded-xl flex flex-col items-center space-x-4 justify-center">
                <img class="z-10" src={logo} alt="Temp Logo"></img>

            </div >
            <div class="p-4 max-w-sm mx-auto -mt-16 bg-white rounded-xl flex flex-col space-x-4 items-center relative">
                {/* <div class="p-4 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4"> */}
                <div class="text-xl font-medium text-black">Aaska Shah</div>
                <p class="text-slate-500 font-small text-sm">Developer</p>
                <div class="flex flex-row justify-center space-x-4">
                    <FontAwesomeIcon class="md:w-1/12" icon={faLinkedinIn}></FontAwesomeIcon>
                    <FontAwesomeIcon class="md:w-1/12" icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon class="md:w-1/12" icon={faEnvelope}></FontAwesomeIcon>
                </div>

            </div>
            <div>


            </div>

        </div >





    )
}

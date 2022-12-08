import logo from '../assets/logo.svg';
import placeholder from "../assets/smallmoon.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import React from 'react';


function InfoTile() {
    return (
        <div >
            <div className='visible lg:hidden transform translate-y-1/4 -mb-52' >
                <div class="p-4 max-w-sm mx-auto -mb-4 rounded-xl flex justify-center">
                    <img class="w-11/12 h-11/12 rounded" src={placeholder} alt="Temp Logo"></img>
                </div>
                <div class="p-4 w-1/4 mx-auto justify-center bg-white rounded-xl flex flex-col">

                    <div class="text-xl font-medium text-black">Aaska Shah</div>
                    <p class="text-slate-500 font-small text-sm">Developer</p>
                    <div class="flex flex-col p-5 ">

                        <div className='flex flex-row space-x-4 border-b-1' >
                            <a href='https://www.linkedin.com/in/aaska-shah'>
                                <FontAwesomeIcon className='svg-inline--fa fa-linkedin-in w-10/12' icon={faLinkedinIn}></FontAwesomeIcon></a>
                            <a href="https://www.linkedin.com/in/aaska-shah" className='text-base'>Linkedin</a>

                        </div>
                        <div className='flex flex-row space-x-4 border-t-2 border-b-1'>
                            <a href='https://www.github.com/AaskaS' >
                                <FontAwesomeIcon class="svg-inline--fa fa-github w-10/12 " icon={faGithub}></FontAwesomeIcon></a>
                            <a href="https://www.github.com/AaskaS" className='text-base'>Github</a>

                        </div>

                        <div className='flex flex-row space-x-4 border-t-2 border-b-1'>
                            <a href="#contact"><FontAwesomeIcon class="svg-inline--fa fa-envelope w-10/12  " icon={faEnvelope}></FontAwesomeIcon></a>
                            <a href="#contact" className='text-base'>Email</a>
                        </div>



                    </div>

                </div>
            </div>
            <div className='xs:invisible lg:visible transform translate-y-1/3'>

                <div class="self-start rounded-xl ml-8 w-7/12 h-7/12 z-10 relative">
                    <img class="w-4/12 h-4/12" src={placeholder} alt="Temp Logo"></img>
                </div>

                <div class="self-start ml-12 bg-white rounded-xl p-6 w-2/12 relative flex flex-col ">

                    <div class="text-xl font-medium text-black">Aaska Shah</div>
                    <p class="text-slate-500 font-small text-sm">Developer</p>

                    <div class="flex flex-col p-5 ">

                        <div className='flex flex-row space-x-4 border-b-1' >
                            <a href='https://www.linkedin.com/in/aaska-shah'>
                                <FontAwesomeIcon className='svg-inline--fa fa-linkedin-in w-10/12' icon={faLinkedinIn}></FontAwesomeIcon></a>
                            <a href="https://www.linkedin.com/in/aaska-shah" className='text-base'>Linkedin</a>

                        </div>
                        <div className='flex flex-row space-x-4 border-t-2 border-b-1'>
                            <a href='https://www.github.com/AaskaS' >
                                <FontAwesomeIcon class="svg-inline--fa fa-github w-10/12 " icon={faGithub}></FontAwesomeIcon></a>
                            <a href="https://www.github.com/AaskaS" className='text-base'>Github</a>

                        </div>

                        <div className='flex flex-row space-x-4 border-t-2 border-b-1'>
                            <a href="#contact"><FontAwesomeIcon class="svg-inline--fa fa-envelope w-10/12  " icon={faEnvelope}></FontAwesomeIcon></a>
                            <a href="#contact" className='text-base'>Email</a>
                        </div>



                        {/* <div className='flex flex-rows space-x-4 border-t-2 border-b-1'>
                                <FontAwesomeIcon class="w-1/12 " icon={faGithub}></FontAwesomeIcon>
                                <p className='text-sm'>Github</p>
                            </div>

                            <div className='flex flex-rows space-x-4 border-t-2'>
                                <FontAwesomeIcon class="w-1/12 " icon={faEnvelope}></FontAwesomeIcon>
                                <p className='text-sm'>Email</p>
                            </div> */}

                    </div>



                </div>

            </div >

        </div >
    )
}

export default InfoTile;


{/* <div>
    <div class="self-start rounded-xl sm:-mb-2 md:-mb-7 lg:-mb-14 ml-6 w-7/12 h-7/12 z-10 relative">
        <img class="w-4/12 h-4/12 " src={logo} alt="Temp Logo"></img>
    </div>
    <div class="self-start ml-10 bg-white rounded-xl p-6 w-2/12 relative flex flex-col items-center">
        
        <div class="text-xl font-medium text-black">Aaska Shah</div>
        <p class="text-slate-500 font-small text-sm">Developer</p>
        <div class="flex flex-row justify-center space-x-4">
            <FontAwesomeIcon class="md:w-1/12" icon={faLinkedinIn}></FontAwesomeIcon>
            <FontAwesomeIcon class="md:w-1/12" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon class="md:w-1/12" icon={faEnvelope}></FontAwesomeIcon>
        </div>

    </div>
</div> */}
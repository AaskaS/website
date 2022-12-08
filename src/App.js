import React from 'react';

// import placeholder from "./assets/smallmoon.jpg"
import About from './components/About.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Header from './components/Header.js'
import InfoTile from './components/InfoTile.js';
import Nav from './components/Nav.js'
// import logo from './assets/logo.svg';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  const [currentlySelected, setCurrentlySelected] = React.useState("about");

  return (
    // <div class="container mx-auto bg-gray-500 w-1/2 p-4 relative">
    //   <img src={logo} alt="" class="w-full h-auto"></img>
    //   <div class="bg-red-300 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">div</div>
    // </div>

    /*
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3 ...">01</div>
      <div class="col-span-2 ...">02</div>
      <div class="row-span-2 col-span-2 ...">03</div>
    </div>
    */
    <div className="min-w-min min-h-screen bg-gray-800 relative" >

      {/* <div className='visible lg:hidden '>
        <Nav setCurrentlySelected={setCurrentlySelected} />
        {currentlySelected === "about" ? <About /> : <></>}
        {currentlySelected === "work" ? <Work /> : <></>}
        {currentlySelected === "projects" ? <Projects /> : <></>}
        {currentlySelected === "contact" ? <Contact /> : <></>}

      </div> */}
      <div className='static'>
        <InfoTile />
      </div>




      <div >
        <Header setCurrentlySelected={setCurrentlySelected} />
        {currentlySelected === "about" ? <About /> : <></>}
        {currentlySelected === "work" ? <Work /> : <></>}
        {currentlySelected === "projects" ? <Projects /> : <></>}
        {currentlySelected === "contact" ? <Contact /> : <></>}
      </div>








    </div >







  )
}


// function App() {

//   return (
//     // <div className="dark:bg-neutral-800 dark:text-white min-h-screen grid place-items-center h-screen">




//     //   {/* <div className="flex justify-center space-x-3">
//     //     <div><a href='https://www.linkedin.com/in/aaska-shah'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></div>
//     //     <div><a href='https://www.github.com/AaskaS'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></div>
//     //     <div><a href=''><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></div>
//     //   </div> */}

//     //   <div class="grid grid-row-2 justify-items-center items-center">
//     //     <h1 className="text-3xl font-bold" > Aaska Shah</h1>
//     //     <div><a href='https://www.linkedin.com/in/aaska-shah'><FontAwesomeIcon size='3x' icon={faLinkedinIn}></FontAwesomeIcon></a></div>
//     //     {/* <div class="w-10 h-10 justify-center items-center flex">Text 1</div>
//     //     <div class="self-center">Text 2</div>    

//     //  <div><a href='https://www.github.com/AaskaS'><FontAwesomeIcon size='3x' icon={faGithub}></FontAwesomeIcon></a></div> */ }
//     //     <div className='-mb-12'>
//     //       <Github />
//     //     </div>

//     //     <div className='-mb-12'>
//     //       <Email />
//     //     </div>


//     //     <div><FontAwesomeIcon size='3x' icon={faCode}></FontAwesomeIcon></div>
//     //     {/* <div><FontAwesomeIcon size='3x' icon={faEnvelope}></FontAwesomeIcon></div> */}
//     //     <div><FontAwesomeIcon size='3x' icon={faBriefcase}></FontAwesomeIcon></div>

//     //   </div >

//     //   {/* <div className="dark:bg-neutral-800 dark:text-white min-h-screen grid place-items-center h-screen">
//     //     <div className="grid grid-row-2 justify-items-center items-center">

//     //     </div>
//     //   </div> */}
//     //   {/* <div className="flex items-center justify-center" onClick={() => setIsActive(!isActive)}>

//     //     <div>{isActive ? <FontAwesomeIcon size='3x' icon={faGithub}></FontAwesomeIcon> : <FontAwesomeIcon size='3x' icon={faGithub}></FontAwesomeIcon>}</div>
//     //   </div>
//     //   <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
//     //     {isActive && <div>Projects</div>}
//     //   </div> */}

//     //   {/* <form id="contact_form" method="POST" action="" >
//     //     <div >
//     //       <div ><input type="text" name="sendername" placeholder="Name" /></div>
//     //       <div ><input type="text" name="senderemail" placeholder="Email" /></div>
//     //       <div >
//     //         <textarea name="sendermessage" placeholder="Message"></textarea>
//     //       </div>
//     //       <div >
//     //         <input type="submit" value="Send Message" />
//     //       </div>
//     //     </div>
//     //   </form> */}

//     //   {/* <div className=' container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
//     //     <p className="text-3xl text-gray-700 font-bold mb-5">hi</p>

//     //     <h1 className="text-3xl font-bold">
//     //       Hello world!
//     //     </h1>

//     //   </div> */}
//     // </div >

//     <div>
//       Hello
//     </div>


//   );
// }

// export default App;

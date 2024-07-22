import React from 'react';
import Snake from './Snake.jpg';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub, FaGit} from "react-icons/fa";


const Contact = () => {
    const style = { color: "#3b82f6", fontSize: "2em" }

  return (
    <div className='flex flex-wrap items-center relative' id="Contacts">
      {/* Image Container */}
      <div className="w-full md:w-1/2 relative">
        <img src={Snake} className="w-full rounded-full" alt="Snake" />
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 px-4 overflow-hidden mr-[10vw] lg:mr-4">
        <h2 className=' z-10 relative text-7xl overflow-hidden text-right font-mono text-white'><motion.span className=' hover:text-nit-100 hover:text-8xl'
        ><b>Contact me</ b></motion.span></h2>
        <p className="text-nit-100 text-4xl text-right mt-8 overflow-hidden">Do you speak <br /><b className='text-5xl text-white font-mono hover:text-nit-100 hover:text-6xl transition-transform'>Parseltongue</b><br />It's Ok if you don't,<br />I speak <b className='font-mono text-white'>English</b> too.</p>
        <div className="mt-10 text-right text-white text-xl">
        <div className="my-4 flex flex-wrap gap-4 place-content-end">
            <div className=""><span>Connect with me on <br /><b className='underline decoration-blue-500 hover:text-blue-500 hover:decoration-white'>LinkedIn</b></span></div>
            <div className="">
            <button className="mt-3">
                    <a href="https://www.linkedin.com/in/nitesh-bhardwaj-87294a252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn style={style}/></a>
                </button>
            </div>
        </div>

        <div className="my-4 flex flex-wrap gap-4 place-content-end">
            <div className=""><span>Follow me on <br /><b className='underline decoration-blue-500 hover:text-blue-500 hover:decoration-white'>Instagram</b></span></div>
            <div className="">
            <button className="mt-3">
                    <a href="https://www.instagram.com/n.bhardwaj_04"><FaInstagram style={style}/></a>
                </button>
            </div>
        </div>

        <div className="my-4 flex flex-wrap gap-4 place-content-end">
            <div className=""><span>Fork my repos on <br /><b className='underline decoration-blue-500 hover:text-blue-500 hover:decoration-white'>GitHub</b></span></div>
            <div className="">
            <button className="mt-3">
                    <a href="https://github.com/17Nitesh"><FaGithub style={style}/></a>
                </button>
            </div>
        </div>

        </div>

        {/* Additional text or content can be added here */}
      </div>
    </div>
  );
}

export default Contact;

import hitler from "./image4.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "./Type.jsx";

import React, {useRef, useEffect} from 'react';
const headings = {
    initial: {x:-500, opacity:0},
    animate: {x:0, opacity:1, transition: {duration: 1, staggerChildren:0.1}},
}
const Home  = () => {


    const style = { color: "#03ff9a", fontSize: "2em" }
    const contentHome = <>
    
    </>
    return(
        <div id="Home" >
        <div className="grid grid-cols-1 md:grid-cols-2  mt-48 font-mono overflow:hidden"  >
            <motion.div className="text-white text-center md:text-right overflow-hidden" variants={headings} initial="initial" animate="animate" >
                <motion.h2 variants = {headings} className="lg:mr-16">Front-End Developer</motion.h2>
                <motion.h2 variants={headings} className="lg:mr-16">Chemical Engineer</motion.h2>
                <motion.h1 variants={headings}className="text-6xl lg:mr-16 mt-2 overflow-hidden"><span className="hover:text-nit-100 hover:text-7xl">Hello</span> <span className="hover:text-nit-100 hover:text-7xl">I'm <br /></span> <span className="text-7xl lg:text-8xl text-nit-100 hover:text-white hover:text-9xl"><b><Typewriter text="Nitesh" delay={400} infinite /></b></span></motion.h1>
                <motion.p variants={headings} className="ml-10 lg:mr-16 mt-4 font-sans">I am a Chemical Engineering student from IIT Jammu, and served as Head of the Network and Security Department of Coding Club IIT Jammu from August 2023 to August 2024.</motion.p>
                <motion.div variants={headings} className="flex gap-4 place-content-center md:place-content-end mr-0 mt-4 md:mr-16">
                <button className="">
                    <a href="https://github.com/17Nitesh"><FaGithubSquare style = {style}/></a>
                </button>
                <button className="">
                    <a href="https://www.instagram.com/n.bhardwaj_04"><FaInstagram style = {style}/></a>
                </button>
                <button className="">
                    <a href="https://www.linkedin.com/in/nitesh-bhardwaj-87294a252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn style = {style}/></a>
                </button>
                </motion.div>
            </motion.div>
            <div className="overflow-hidden">
                <motion.img  src={hitler} alt="MyPhoto" className="rounded-full border-4 h-72 mx-auto md:ml-20 border-nit-200 my-10 hover:cursor-pointer"
                    
                    whileHover = {{
                        scale:1.3
                    }}
                    transition = {{
                        duration:0.2,
                        type : "spring",
                        stiffness: 250
                    }}
                    whileTap = {{
                        scale:0.8
                    }}
                />
            </div>
        </div>
        </ div>
    )
}
export default Home;

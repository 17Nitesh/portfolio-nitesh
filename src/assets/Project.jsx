import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <>
            <div id="Projects" className='h-[100vh] flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="textContainer text-center overflow-hidden"
                >
                    <h1 className="text-6xl font-bold text-white mb-8 overflow-hidden"><span>ERR <span className='text-nit-100 font-mono hover:text-white'>404</span></span><br /> <motion.span className="text-nit-100 font-mono text-8xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-950 hover:to-nit-100 hover:cursor-pointer"

                    >Projects</motion.span><br />Not Found</h1>
                    <motion.button
                        className="rounded-full bg-white text-black font-mono p-2 ml-[50vw] m-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={toggleText} // Toggle text visibility on button click
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <b>Click to reveal</b>
                    </motion.button>
                    <motion.p
                        className={`text-nit-100 mt-4 ${showText ? 'block' : 'hidden'}`} // Show/hide based on showText state
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showText ? 1 : 0 }} // Fade in/out based on showText state
                        transition={{ duration: 0.5 }}
                    >
                        This is my First Project. I am working on others too, once they are completed i will add them here.
                    </motion.p>
                </motion.div>
            </div>
        </>
    );
};

export default Project;

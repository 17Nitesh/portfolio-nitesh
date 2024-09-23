import React, { useRef } from 'react';
import me from './image5.jpg';
import { motion, useScroll, useTransform } from "framer-motion";

// Custom hook to check if the screen width is greater than a specified value
const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(window.matchMedia(query).matches);

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event) => setMatches(event.matches);

        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}

const About = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const isDesktop = useMediaQuery('(min-width: 768px)'); // Adjust the min-width based on your design requirements

    // Define transforms only for desktop
    const transformX = useTransform(scrollYProgress, [0, 1], ['-10%', '50%']);
    const transformOpac = useTransform(scrollYProgress, [0, 1], ['-10%', '300%']);

    return (
        <div id="About" ref={scrollRef} className="hidden md:flex flex-wrap justify-center items-center font-mono p-4">
            <motion.div
                style={isDesktop ? { x: transformX, opacity: transformOpac } : {}}
                className="hidden md:block flex-1 text-center lg:text-right"
            >
                <p className="text-white">
                    <b className='text-4xl md:text-7xl text-nit-100 hover:text-5xl md:hover:text-8xl hover:text-white font-sans transition-all'>About Me</b><br /> <br />
                    <span className='text-xl md:text-3xl text-nit-100'>
                        I'm <b className='text-white hover:text-2xl md:hover:text-4xl hover:text-nit-100'>Front-end Developer</b> and <br />
                        <b className='text-white hover:text-2xl md:hover:text-4xl hover:text-nit-100'>Chemical Engineer</b> from India. <br /> <br /> <br />
                    </span>
                    <span className='text-sm md:text-lg block md:inline ml-0 md:ml-[10vw]'>
                        I enjoy taking complex problems and converting them into simple and beautiful websites. I also love the logic and structure of coding and always strive to write simple and efficient code, whether it be <b className='text-base md:text-xl'>HTML, CSS or JS.</b>
                    </span>
                    <span className='text-base md:text-xl block md:inline'>
                        When I am not coding or playing with <b>P&ID</b>, you'll find me in the <b className='text-nit-100 font-sans text-lg md:text-2xl'>Gym.</b>
                    </span>
                </p>
            </motion.div>
            <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
                <img
                    src={me}
                    alt="me"
                    className=" md:h-[75vh] mt-[5vh] md:mt-[10vh] object-cover shadow-lg m-[5vw] md:m-[10vw]"
                />
            </div>
        </div>
    );
}

export default About;
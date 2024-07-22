import React from 'react';
import me from './image5.jpg';

const About = () => {
    return (
        <div id="About" className="flex flex-wrap justify-center items-center font-mono">
            <div className="flex-1 text-right">
                <p className="text-white "><b className='text-7xl text-nit-100 hover:text-8xl hover:text-white font-sans'>About Me</b><br /> <br /><span className='text-3xl text-nit-100 '>I'm <b className='text-white hover:text-4xl hover:text-nit-100'>Front-end Developer</b> and <br /><b className='text-white hover:text-4xl hover:text-nit-100'>Chemical Engineer</b> from India. <br /> <br /> <br /></span> <span className='text-lg ml-[10vw]'> I enjoy taking complex problems and converting them into simple and beautiful websites. I also Love the logic and structure of coding and always strive to write simple and efficient code, whether it be <b className='text-xl'>HTML, CSS or JS.</b> </span> <span className='text-xl'> When I am not coding or playing with <b>P&ID</b>, you'll find me in the <b className='text-nit-100 font-sans text-2xl'>Gym.</b></span></p>
            </div>
            <div className="flex-1 flex justify-end mt-10 md:mt-0">
                <img src={me} alt="me" className="h-60 md:h-[75vh] mt-[10vh] object-cover shadow-lg m-[10vw]" />
            </div>
        </div>
    );
}

export default About;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Skill1 from './Skill1.jsx';
import Skill2 from './Skill2.jsx';

function Skills() {

    const createCard = (skill2) => (
        <Skill1
            key={skill2.id}
            title={skill2.title}
            // description={skill2.description}
            logo={skill2.logo}
            color = {skill2.color}
        />
    );

    return (
        <div id="Skills">
            <div className="mt-4 overflow-hidden font-mono">
                <motion.h1 className='text-5xl text-center text-white overflow-hidden hover:text-nit-100 mt-[10vh]'
                    whileHover = {{
                        scale: 1.2,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap = {{scale:0.8}}
                    
                >Skills</motion.h1>
                <motion.div className=" flex flex-wrap gap-10 justify-center overflow-hidden">
                    {Skill2.map(createCard)}
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const Skill1 = (props) => {
    const IconComponent = props.logo; 
    const style = { color: props.color, fontSize: "2em" };
    return (
        <motion.div
            className="bg-gray-900 rounded-lg shadow-md p-4 overflow-hidden mt-10 card"
            whileHover = {{
                scale:1.2
            }}
            transition = {{
                duration:0.2,
                type : "spring",
                stiffness: 250
            }}
            whileTap = {{
                scale:0.8
            }}
 
        >
            <div className="relative overflow-hidden rounded-lg h-40">
                <IconComponent
                    className="object-cover w-full h-full rounded-lg"
                    alt={props.title} style = {style}
                />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-nit-100">{props.title}</h2>
            </div>
        </motion.div>
    );
}

export default Skill1;

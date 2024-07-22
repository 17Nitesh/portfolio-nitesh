import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav className="font-mono w-full fixed top-0 z-50 bg-gradient-to-r from-black to-gray-900">
            <div className="h-20 flex justify-between items-center text-white px-6 py-4">
                <div className="flex items-center flex-1">
                    <h2 className="font-bold text-3xl">
                        <span className="logo">Nitesh</span>(<span className="text-nit-100">...</span>)
                    </h2>
                </div>
                <div className="hidden lg:flex flex-1 items-center justify-end font-normal">
                    <ul className="flex gap-8 text-[18px]">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="transition transform hover:-translate-y-1 hover:text-xl cursor-pointer hover:font-bold hover:text-nit-100 motion-reduce:transition-none motion-reduce:hover:transform-none active:text-nit-100">
                                Home
                            </li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="transition transform hover:-translate-y-1 hover:text-xl cursor-pointer hover:font-bold hover:text-nit-100 motion-reduce:transition-none motion-reduce:hover:transform-none active:text-nit-100">
                                About
                            </li>
                        </Link>
                        <Link spy={true} smooth={true} to="Skills">
                            <li className="transition transform hover:-translate-y-1 hover:text-xl cursor-pointer hover:font-bold hover:text-nit-100 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                Skills
                            </li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="transition transform hover:-translate-y-1 hover:text-xl cursor-pointer hover:font-bold hover:text-nit-100 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                Projects
                            </li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contacts">
                            <li className="transition transform hover:-translate-y-1 hover:text-xl cursor-pointer hover:font-bold hover:text-nit-100 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

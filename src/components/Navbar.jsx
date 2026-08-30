import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-between px-4 md:px-8 py-4 mb-4 mt-2 sticky top-0 z-50 bg-black/80 backdrop-blur"> 
            <h2 className="italic text-2xl md:text-3xl">B.S.</h2>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex bg-gray-900/50 border border-gray-700 rounded-lg p-2 gap-12">
                <a href="#home" className="text-white hover:text-gray-300 transition">Home</a>
                <a href="#about" className="text-white hover:text-gray-300 transition">About</a>
                <a href="#services" className="text-white hover:text-gray-300 transition">Services</a>
                <a href="#projects" className="text-white hover:text-gray-300 transition">Projects</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden flex items-center text-white text-2xl z-50"
            >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            {/* Desktop Message Icon */}
            <a href="#contact" className="hidden md:flex">
                <AiFillMessage className="text-4xl cursor-pointer hover:text-gray-300 transition" />
            </a>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 md:hidden bg-gray-900/95 border-b border-gray-700 backdrop-blur">
                    <nav className="flex flex-col p-4 gap-4">
                        <a 
                            href="#home" 
                            className="text-white hover:text-gray-300 transition py-2 text-lg"
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className="text-white hover:text-gray-300 transition py-2 text-lg"
                            onClick={closeMenu}
                        >
                            About
                        </a>
                        <a 
                            href="#services" 
                            className="text-white hover:text-gray-300 transition py-2 text-lg"
                            onClick={closeMenu}
                        >
                            Services
                        </a>
                        <a 
                            href="#projects" 
                            className="text-white hover:text-gray-300 transition py-2 text-lg"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            className="flex items-center gap-2 text-white hover:text-gray-300 transition py-2 text-lg"
                            onClick={closeMenu}
                        >
                            <AiFillMessage className="text-2xl" />
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </div>
    )
}
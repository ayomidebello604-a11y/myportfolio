import { AiFillMessage } from "react-icons/ai";
export default function Navbar() {
    return (
        <div className="flex items-center justify-between px-8 py-4 mb-4 mt-2 sticky top-0 z-10"> 
            <h2 className="italic text-3xl">B.S.</h2>
            <nav className="flex gap-12 glass">
                <a href="#home" className="text-white hover:text-gray-300">Home</a>
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            </nav>
          <a href="#contact">
            <AiFillMessage className="text-4xl cursor-pointer hover:text-gray-300" />
          </a>
        </div>
    )
}
import React from 'react';
import Stacks from '../components/Stacks';
import img from "../images/img.png";
export default function About() {
    return (
        <div id="about" className="p-6 m-6">
            <h1 className="flex items-center gap-3 text-2xl font-medium p-12">
  <span className="flex-1 border-t border-gray-300"></span>
    About Me
  <span className="flex-1 border-t border-gray-300"></span>
   </h1>
            <div className="flex justify-between m-8">
  <p className="italic p-12 pt-36">I'm a passionate Frontend Developer and Computer Engineering student who enjoys building modern, responsive, and user-friendly web applications. I specialize in creating clean and interactive interfaces using technologies like React, Tailwind CSS, and JavaScript, with a strong focus on performance, scalability, and great user experience. <br />
           Beyond writing code, I enjoy solving problems, learning new technologies, and continuously improving my skills through personal projects and real-world development practice. I'm driven by creativity, innovation, and the desire to build digital experiences that are both functional and impactful.
            </p>
        <img src={img} alt="Profile" />
            </div>
            <h2 className="text-2xl font-medium p-12 pt-8">Stacks</h2>
            <Stacks />
        </div>
    )
}
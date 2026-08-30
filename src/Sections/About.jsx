import React from 'react';
import Stacks from '../components/Stacks';
import img from "../images/img.png";

export default function About() {

    return (
        <div id="about" className="min-h-screen bg-black/40 py-12 md:py-20 px-4 md:px-6 m-4 md:m-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 md:mb-8">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4">Crafting clean code and engaging interfaces</h1>
                        <p className="text-sm md:text-lg text-gray-300 max-w-2xl">I build responsive, scalable web applications with modern technologies, focusing on performance, clean code, and exceptional user experience.</p>
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap">
                        Let's Talk Now
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Section - Experience */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col">
                        <h3 className="text-white text-base md:text-lg font-semibold mb-6">Frontend Development Experience</h3>
                        
                        {/* Profile Image */}
                        <div className="flex-1 flex items-center justify-center mb-6">
                            <img src={img} alt="Profile" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-lg" />
                        </div>

                        {/* Experience Timeline */}
                        <div className="space-y-4">
                            <div className="border-l-4 border-white pl-4">
                                <p className="text-white font-semibold text-sm md:text-base">2026 - Present</p>
                                <p className="text-blue-100 text-xs md:text-sm">Frontend Engineer - FaultlineQA</p>
                            </div>
                            <div className="border-l-4 border-white pl-4">
                                <p className="text-white font-semibold text-sm md:text-base">2025 - 2026</p>
                                <p className="text-blue-100 text-xs md:text-sm">Frontend Developer - Freelance</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Skills & Testimonial */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Tools Section */}
                        <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 md:p-8">
                            <h3 className="text-white text-base md:text-lg font-semibold mb-6">My Tech Stack</h3>
                            <Stacks />
                        </div>

                        {/* Testimonial Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-4 md:p-6">
                                <h3 className="text-white text-base md:text-lg font-semibold mb-4">Testimonial</h3>
                                <p className="text-gray-300 text-xs md:text-sm mb-4">An exceptional developer with strong problem-solving skills and attention to detail. Delivered high-quality code and excellent communication throughout the project.</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-semibold text-sm">Sarah Johnson</p>
                                        <p className="text-gray-400 text-xs">Product Manager</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-4 md:p-6 flex flex-col justify-between">
                                <h3 className="text-white text-base md:text-lg font-semibold mb-4">Contact now</h3>
                                <div className="space-y-2">
                                    <p className="text-blue-100 text-xs md:text-sm">ayomidebello604@gmail.com</p>
                                    <p className="text-blue-100 text-xs md:text-sm">+2347058403330</p>
                                </div>
                                <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold mt-4 hover:bg-gray-100 transition-colors w-full text-sm md:text-base">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
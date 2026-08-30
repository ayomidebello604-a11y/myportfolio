import img from '../images/img.png';
import { useState, useEffect, useRef } from 'react';
import { FaXTwitter,FaWhatsapp,FaLinkedin } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const sectionRef = useRef(null);
    const hasAnimatedRef = useRef(false);
    const fullText = ' Hey👋, I\'m Samad';
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    let index = 0;
                    const interval = setInterval(() => {
                        if (index <= fullText.length) {
                            setDisplayText(fullText.substring(0, index));
                            index++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 100);
                }
            },
            { threshold: 0.5 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [fullText]);

    return (
        <div className="p-3 md:p-6 m-4 md:m-8">
     <section ref={sectionRef} id='home' className='flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 mt-8'>
           <div className="flex justify-center md:block w-full md:w-auto">
                <img src={img} alt="profile" className="w-40 h-40 md:w-auto md:h-auto rounded-lg"/>
            </div>
                 <div className="md:mr-12 w-full md:w-auto text-center md:text-left">
                    <p className="font-bold text-base md:text-lg mb-4">{displayText}</p>
                      <h1 className="text-3xl md:text-5xl font-bold">FRONTEND <br/> DEVELOPER!</h1>
                    <p className="text-sm md:text-lg mb-8 text-gray-300">I enjoy creating scalable frontend applications <br className="hidden md:block"/> with clean UI, smooth animations, and great user experience.</p>
                    <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                      <button className="bg-gray-900/50 text-white border border-gray-700 hover:scale-105 font-bold py-2 px-4 rounded-lg cursor-pointer text-sm md:text-base transition">
                          Contact Me
                      </button>
                      <button className="bg-gray-900/50 text-white border border-gray-700 hover:scale-105 font-bold py-2 px-4 rounded-lg cursor-pointer text-sm md:text-base transition">
                          Download CV
                      </button>
                    </div>
                    <div className='flex flex-cols gap-6 md:gap-12 justify-center md:justify-start mt-6 md:mt-8'>
                        <FaXTwitter className="text-3xl md:text-4xl p-2 text-black rounded-md bg-white hover:text-gray-500 cursor-pointer transition" />
                        <FaWhatsapp className="text-3xl md:text-4xl p-2 text-black bg-white rounded-md hover:text-gray-500 cursor-pointer transition" />
                        <FaLinkedin className="text-3xl md:text-4xl p-2 text-black bg-white rounded-md hover:text-gray-500 cursor-pointer transition" />
                        <IoMdMailUnread className="text-3xl md:text-4xl p-2 text-black bg-white rounded-md hover:text-gray-500 cursor-pointer transition" />
                    </div>
            </div>
         
        </section>
       
           
        </div>
     
            
    
    )
}
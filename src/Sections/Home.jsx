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
        <div className= "p-6 m-6 ">
     <section ref={sectionRef} id='home' className='flex flex-cols items-center justify-between gap-12 mt-8'>
           <div>
                <img src={img} alt="profile" className=""/>
            </div>
                 <div className="mr-12">
                    <p className="font-bold text-lg mb-4">{displayText}</p>
                      <h1 className="text-5xl font-bold">FRONTEND <br/> DEVELOPER!</h1>
                    <p className="text-lg mb-8 text-gray-300">I enjoy creating scalable frontend applications <br /> with clean UI, smooth animations, and great user experience.</p>
                    <div className="flex gap-4">
                      <button className="liquid-button liquid-button-dark bg-gray-800 text-white hover:text-black font-bold py-2 px-4 rounded-lg cursor-pointer">
                          Contact Me
                      </button>
                      <button className="liquid-button liquid-button-light bg-white text-black hover:text-gray-300 font-bold py-2 px-4 rounded-lg cursor-pointer">
                          View Projects
                      </button>
                    </div>
                    <div className='flex flex-cols gap-12'>
                        <FaXTwitter className="text-4xl mt-8 p-2 text-black rounded-md bg-white hover:text-gray-500 cursor-pointer" />
                        <FaWhatsapp className="text-4xl mt-8 p-2  text-black bg-white rounded-md hover:text-gray-500 cursor-pointer" />
                        <FaLinkedin className="text-4xl mt-8 p-2  text-black bg-white rounded-md hover:text-gray-500 cursor-pointer" />
                        <IoMdMailUnread className="text-4xl mt-8 p-2  text-black bg-white rounded-md hover:text-gray-500 cursor-pointer" />
                    </div>
            </div>
         
        </section>
       
           
        </div>
     
            
    
    )
}
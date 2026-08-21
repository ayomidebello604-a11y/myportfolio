import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { IoMdMailUnread } from 'react-icons/io';

export default function Contact() {
    const [message, setMessage] = useState({
        mail: "",
        message: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessage({
            ...message,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Message sent:", message);
        setMessage({ mail: "", message: "" });
    }

    return(
        <div className="p-6 m-6">
            <section id='contact' className='mt-12'>
                <h1 className="flex items-center gap-3 text-2xl font-medium p-12">
                    <span className="flex-1 border-t border-gray-300"></span>
                    Get In Touch
                    <span className="flex-1 border-t border-gray-300"></span>
                </h1>
                <div className='flex gap-12 items-center flex-wrap justify-center'>
                    <div className='flex-1 min-w-80'>
                        <h1 className="text-6xl italic font-bold text-white leading-tight mb-6">Ready to Start?</h1>
                        <p className='text-gray-300 text-lg leading-relaxed font-light'>Send a message and let's talk about your project, goals, and how we create something impactful together</p>
                    </div>

                    <div className='flex-1 min-w-96 flex justify-center'>
                        <div className='glass p-8 w-full rounded-2xl'>
                        
                  <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label className='block text-white mb-2 font-medium'>Email</label>
                                <div className='relative flex items-center'>
                                    <IoMdMailUnread className='absolute left-4 text-2xl text-gray-400 pointer-events-none' />
                                    <input 
                                        value={message.mail} 
                                        type="email" 
                                        name="mail" 
                                        placeholder="your@email.com" 
                                        onChange={handleChange}
                                        required
                                        className='w-full pl-14 pr-4 py-3  text-white rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none transition duration-300 placeholder-gray-500'
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className='block text-white mb-2 font-medium'>Message</label>
                                <textarea 
                                    value={message.message} 
                                    name="message" 
                                    placeholder="Your Message..." 
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className='w-full px-4 py-3  text-white rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none transition duration-300 placeholder-gray-500 resize-none'
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                className='w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg  transition-all duration-300 flex items-center justify-center gap-2'
                            >
                                <span>Send Message</span>
                                <IoMdSend className='text-xl' />
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
import { useState, useEffect } from 'react';
import { IoMdSend, IoMdMailUnread } from 'react-icons/io';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_rpbjl8v';
  const TEMPLATE_ID = 'template_4zbxlt9';
  const PUBLIC_KEY = '2vz8s2Vc5J3RJwK5K';

  // Initialize EmailJS globally once on component mount
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const templateParams = {
      email: formData.email,
      message: formData.message,
      name: formData.email.split('@')[0],
    };

    // Called with initialized public key
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-3 md:p-6 m-4 md:m-8">
      <section id="contact" className="mt-8 md:mt-12">
        <h1 className="flex items-center gap-3 text-lg md:text-2xl font-medium p-4 md:p-12">
          <span className="flex-1 border-t border-gray-300"></span>
          Get In Touch
          <span className="flex-1 border-t border-gray-300"></span>
        </h1>
        <div className="flex gap-6 md:gap-12 items-center flex-col md:flex-row md:flex-wrap md:justify-center">
          <div className="w-full md:flex-1 md:min-w-80">
            <h1 className="text-3xl md:text-6xl italic font-bold text-white leading-tight mb-4 md:mb-6">
              Ready to Start?
            </h1>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light">
              Send a message and let's talk about your project, goals, and how we create something
              impactful together
            </p>
          </div>

          <div className="w-full md:flex-1 md:min-w-96 flex justify-center">
            <div className="bg-gray-900/50 border border-gray-700 p-4 md:p-8 w-full rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium text-sm md:text-base">Email</label>
                  <div className="relative flex items-center">
                    <IoMdMailUnread className="absolute left-4 text-xl md:text-2xl text-gray-400 pointer-events-none" />
                    <input
                      value={formData.email}
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      onChange={handleChange}
                      required
                      className="w-full pl-12 md:pl-14 pr-4 py-2 md:py-3 bg-gray-900/50 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none transition duration-300 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm md:text-base">Message</label>
                  <textarea
                    value={formData.message}
                    name="message"
                    placeholder="Your Message..."
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 md:py-3 bg-gray-900/50 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none transition duration-300 placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 text-sm md:text-base"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <IoMdSend className="text-lg md:text-xl" />
                </button>

                {status && (
                  <p
                    className={`text-center text-xs md:text-sm ${
                      status.includes('successfully') ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
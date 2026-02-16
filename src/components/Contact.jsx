import React, { useState } from 'react';
import { Linkedin, Github, Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for submission handling
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // IMPORTANT: Replace 'YOUR_UNIQUE_ID' with your Formspree ID
      const response = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Failed to send.");
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: "Oops! Something went wrong. Please try again." });
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-4" id="contact">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Panel: Contact Information */}
          <div className="bg-blue-600 p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-10 leading-relaxed">
                I am interested in development and Data Analytics roles. 
                Feel free to reach out for collaborations or opportunities!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-xl shadow-inner"><Mail size={20} /></div>
                  <span className="font-medium">yash@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-xl shadow-inner"><MapPin size={20} /></div>
                  <span className="font-medium">Jh</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10">
              <p className="text-blue-200 text-sm mb-4 uppercase tracking-widest font-bold">Connect with me</p>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/yash-sinha-850a8a25b/" className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-md">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/SinhaYash23" className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-md">
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="p-8 md:p-12 md:w-3/5 bg-white">
            {status.submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-10">
                <div className="bg-green-100 text-green-600 p-5 rounded-full animate-bounce">
                  <Send size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
                  <p className="text-gray-500 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
                <button 
                  onClick={() => setStatus({ ...status, submitted: false })}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" rows="5" required
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project or job opening..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 resize-none"
                  ></textarea>
                </div>

                {status.error && (
                  <p className="text-red-500 text-sm font-medium">{status.error}</p>
                )}

                <button 
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.98]
                    ${status.submitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
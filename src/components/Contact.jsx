import React, { useState } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile_number: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // loading state 
    const toastId = toast.loading('Sending your message...');
    try {
      const response = await fetch('http://localhost:8000/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.update(toastId, {
          render: 'Message sent successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false
        });
        setFormData({
          full_name: '',
          email: '',
          mobile_number: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.update(toastId, {
        render: `Error: ${error.message}`,
        type: 'error',
        isLoading: false,
        autoClose: 5000
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F8AC8C]">

    {/* toast container */}
    <ToastContainer 
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <h2 className="text-4xl font-bold mb-10 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto text-center space-y-6">
        <div className='flex justify-between gap-5 max-md:flex-col max-md:px-6'>
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              value={formData.full_name}
              onChange={handleChange}
              className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="tel"
              name="mobile_number"
              min="0"
              placeholder="Mobile Number"
              required
              value={formData.mobile_number}
              onChange={handleChange}
              className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className='flex flex-col max-md:px-6 gap-4'>
          <textarea
            name="message"
            cols="30"
            rows="8"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
          ></textarea>
          <button 
            type="submit"
            className="w-40 bg-gray-700 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-purple-600 text-lg"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="arrow-top m-6 scroll-smooth flex justify-end">
        <a href="#home" className="p-2 bg-blue-500 rounded-md">
          <BiUpArrow/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
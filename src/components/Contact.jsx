import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  const [option, setOption] = useState("General inquiry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "General inquiry",
    message: "",
  });

  function optionHandler(e) {
    setFormData({ ...formData, subject: e.target.value });
    setOption(e.target.value);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function formHandler(e) {
    e.preventDefault();
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "General inquiry",
      message: "",
    });
    setOption("General inquiry");
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='sm:h-[80vh] h-full w-full sm:w-[60vw] flex flex-col items-center shadow-2xl'>
        <div>
          <p className='text-3xl font-semibold text-black'>Contact Us</p>
        </div>
        <div className='w-full flex sm:flex-row flex-col h-full '>
          <div className='sm:w-1/2 w-full flex sm:flex-col sm:p-8 justify-center flex-wrap gap-5 p-3 sm:gap-10'>
            <div className='flex flex-col justify-center items-center'>
              <FaLocationDot size={30} />
              <p className='font-semibold text-sm sm:text-base'>Location:</p>
              <p>123 Main St, Anytown, USA</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <FaPhoneAlt size={30} />
              <p className='font-semibold text-sm sm:text-base'>Phone:</p>
              <p>(123) 456-7890</p>
            </div>
            <div className='flex flex-col sm:justify-center items-center'>
              <BiLogoGmail size={30} />
              <p className='font-semibold text-sm sm:text-base'>Email:</p>
              <p className='text-start'>contact@example.com</p>
            </div>
          </div>
          <div className='sm:w-1/2 w-full'>
            <form action="" onSubmit={formHandler}>
              <div className='flex flex-col gap-5 p-4'>
                <input
                  type="text"
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Name'
                  className='w-full h-10 border rounded-md border-black p-3'
                />
                <input
                  type="text"
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email'
                  className='w-full h-10 border rounded-md p-3 border-black'
                />
                <input
                  type="text"
                  id='number'
                  value={formData.number}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  className='w-full h-10 rounded-md border p-3 border-black'
                />
                <select
                  id='subject'
                  className='sm:p-4 p-1 border-2 border-black rounded-md'
                  value={formData.subject}
                  onChange={optionHandler}
                >
                  <option value="General inquiry">General inquiry</option>
                  <option value='Feedback'>Feedback</option>
                  <option value='Support'>Support</option>
                  <option value='Other'>Other</option>
                </select>
                <input
                  type="text"
                  id='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Message'
                  className='w-full rounded-md p-3 h-10 sm:h-20 border border-black '
                />
              </div>
              <button className='sm:w-60 w-30 text-xl rounded-md ml-4 p-3 text-white bg-black'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

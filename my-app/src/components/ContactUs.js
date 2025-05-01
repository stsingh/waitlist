import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('http://localhost:8080/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Email failed to send');
        setSubmitStatus({ 
          success: false, 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <section id="contact" className="relative w-full h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
        
        {submitStatus.message && (
          <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`bg-[#F9F8F4] w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-[#706E67] focus:border-[#2B2B2B]'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`bg-[#F9F8F4] w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-[#706E67] focus:border-[#2B2B2B]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className={`bg-[#F9F8F4] w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-[#706E67] focus:border-[#2B2B2B]'
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-2 text-[#2B2B2B] border-2 border-[#706E67] rounded-lg 
                     hover:bg-[#2B2B2B] hover:text-[#FFFEF2] transition-all duration-300
                     ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="pt-6">
          <p className="text-gray-600 mb-4">Or email us directly at:</p>
          <a
            href="mailto:team@sarasrecs.ai"
            className="inline-block px-6 py-2 text-[#2B2B2B] border-2 border-[#706E67] rounded-lg 
                     hover:bg-[#2B2B2B] hover:text-[#FFFEF2] transition-all duration-300"
          >
            team@sarasrecs.ai
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
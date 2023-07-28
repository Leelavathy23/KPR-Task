
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    caseType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(() => {
        alert('Contact form submitted successfully!');
      })
      .catch((err) => {
        alert('Failed to submit the contact form.');
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields go here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;












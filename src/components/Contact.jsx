import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    // Add form validation here
  };

  return (
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <table>
          <tr>
            <td>Name:</td>
            <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input type="email" name="email" value={formData.email} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td>Contact:</td>
            <td><input type="tel" name="contact" value={formData.contact} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td>Address:</td>
            <td><input type="text" name="address" value={formData.address} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="submit">Submit</button></td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <form className='form'>
      <h1>Feel Free to Contact Us</h1>

      <label>Name</label>
      <input placeholder='Name' />

      <label>Email</label>
      <input placeholder='Email' />

      <label>Message</label>
      <textarea placeholder='Message' />

      <button type='submit'>Submit</button>
    </form>

  )
}

export default Contact;

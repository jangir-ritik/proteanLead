import React from 'react';
import Image from 'next/image';
import Arrow from '../../../public/svgs/Arrow.svg';

function ContactForm() {
  return (
    <form className='contactForm'>
      <fieldset>
        {/* <legend>Contact Information</legend> */}
        <div className="form-group">
          <label htmlFor="name">Name<span>*</span></label>
          <input id="name" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company<span>*</span></label>
          <input id="company" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title<span>*</span></label>
          <input id="jobTitle" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country<span>*</span></label>
          <select id="country" required>
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries as needed */}  
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address<span>*</span></label>
          <input id="email" type="email" required />
        </div>
        <div className="terms">
          <input id="terms" type="checkbox" required />
          <label htmlFor="terms">
            I agree to the <a href="#">Terms & Conditions.</a>
          </label>
        </div>
      </fieldset>
      <button className='CTA' type="submit">
        Get in touch
        <Image src={Arrow} alt="arrow icon" />
      </button>
    </form>
  );
}

export default ContactForm;

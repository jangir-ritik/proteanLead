import React from 'react'
import contactUsBg from '../../../public/images/contactUsBg.png';
import Image from 'next/image';
import thankyouBgBottom from '../../../public/images/thankyouBgBottom.png';
import thankyouBgTop from '../../../public/images/thankyouBgTop.png';
import ContactForm from '../components/ContactForm';
import { borel, gilroy } from '../fonts';

function ContactSection() {
  return (
    <>
      <section className="contactSection  ">
        <h2 className={gilroy.className}>We would love to connect</h2>
        <div className="formWrapper">
          <ContactForm />
        </div>
        <Image id='contactUsBgImage' src={contactUsBg} alt="decorative image" />
      </section>

      <section className='thankyouCardWrapper'>
      <div className='thankyouCard'>
        <Image id='topImage' src={thankyouBgTop} alt="decorative image" />
        <div className='content'>
          <h2 className={borel.className}>thank you</h2>
          <p>for sharing the details. We will get back to you shortly.</p>
          <Image id='bottomImage' src={thankyouBgBottom} alt="decorative image" />
        </div>
      </div>
      <Image id='contactUsBgImage' src={contactUsBg} alt="decorative image" />
      </section>
    </>
  )
}

export default ContactSection
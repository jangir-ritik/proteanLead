import React from 'react'
import Slide from '../components/Slide';
import Image from 'next/image';
import heroSectionBgRight from '../../../public/images/heroSectionBgRight.png';
import heroSectionBgLeft from '../../../public/images/heroSectionBgLeft.png';
import { borel, openSans } from '../fonts';
// import PdfViewer from '../components/PdfViewer';

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="leftWrapper">
        <h1 className={borel.className}>Hello world,</h1>
        <p className={openSans.className}>We are Protean eGov Technologies. India&apos;s largest and publicly listed Digital Public Infrastructure organisation.</p>
      </div>
      <div className="rightWrapper">
        {/* <Slide /> */}
        {/* <PdfViewer /> */}
      </div>
      <Image id='heroSectionLeftImage' src={heroSectionBgLeft} alt="decorative image" />
      <Image id='heroSectionRightImage' src={heroSectionBgRight} alt="decorative image" />
    </section>
  )
}

export default HeroSection
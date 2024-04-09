'use client'
import React, { useEffect, useRef, useState } from 'react'
import leftArrow from '../../../public/svgs/left.svg';
import rightArrow from '../../../public/svgs/right.svg';
import Image from 'next/image';
import slideMobileBg from '../../../public/images/slideMobileBg.png';

function Slide() {
  const slidesRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const slidesWidth = slidesRef.current.offsetWidth;
    const totalSlides = slidesRef.current.querySelectorAll('.slide').length;
    // slidesRef.current.style.width = `${slidesWidth * totalSlides}px`;

  }, [])

  const handlePrevSlide = () => {
    const totalSlides = slidesRef.current.querySelectorAll('.slide').length;
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  const handleNextSlide = () => {
    const totalSlides = slidesRef.current.querySelectorAll('.slide').length;
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const sliderStyle = {
    transform: `translateX(-${(currentSlide - 1) * 100}%)`, // Adjusting x position based on current slide
  };

  return (
    <div className='slidesWrapper'>
      <div ref={slidesRef} className='slides'>
        <div className='slidesSlider' style={sliderStyle}>
        <div className='slide' id='s1'>
          a
        </div>
        <div className='slide' id='s2'>
           b
        </div>
        <div className='slide' id='s3'>
          c
        </div>
        <div className='slide' id='s4'>
          d
        </div>
        </div>
      </div>
      <div className='slideControl'>
        <button onClick={handlePrevSlide}>
        <Image src={leftArrow} alt='left button' />
        </button>
        <button onClick={handleNextSlide}>
        <Image src={rightArrow} alt='right button' />
        </button>
      </div>
      <Image id='slideBgImage' src={slideMobileBg} alt='decorative image' />
    </div>
  )
}

export default Slide
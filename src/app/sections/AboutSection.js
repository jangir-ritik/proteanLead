import React from 'react'
import { openSans } from '../fonts'

function AboutSection() {
  return (
    <section className={`aboutSection ${openSans.className}`}>
    <p>Protean has been at the forefront of building India&apos;s digital infrastructure for nearly three decades. We are #BuildingForBillions and are on a mission of social and financial inclusion for every Indian.</p> 
    <p>We have modernised tax services, enabled digital pension infrastructure and are the largest ID & Authentication service providers in the country. The impact of our work has touched the lives of every Indian.</p>
  </section>
  )
}

export default AboutSection
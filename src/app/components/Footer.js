import Image from 'next/image'
import React from 'react'
import logoWhite from '../../../public/images/proteanLogoWhite.png';
import ig from '../../../public/svgs/ig.svg';
import fb from '../../../public/svgs/fb.svg';
import yt from '../../../public/svgs/yt.svg';
import x from '../../../public/svgs/x.svg';
import li from '../../../public/svgs/li.svg';
import Link from 'next/link';
import footerBg from '../../../public/images/footerBg.png';


const pagesData = [
    {
        title: 'Privacy policy',
        url: 'https://www.proteantech.in/policy',
    },
    {
        title: 'Disclaimer',
        url: 'https://www.proteantech.in/disclaimer',
    },
    {
        title: 'Terms & Conditions',
        url: 'https://www.proteantech.in/terms',
    },
    // {
    //     title: 'Connect',
    //     url: '/connect',
    // },
]

const socialsData = [
    {
        img: li,
        title: 'linkedin',
        url: "https://www.linkedin.com/company/proteantech/"
    },
    {
        img: x,
        title: 'x',
        url: "https://www.twitter.com/ProteanEgovTech"
    },
    {
        img: fb,
        title: 'facebook',
        url: "https://www.facebook.com/ProteanTechnologies"
    },
    {
        img: yt,
        title: 'youtube',
        url: "https://www.youtube.com/@proteanegovtechnologies"
    },
    {
        img: ig,
        title: 'instagram',
        url: "https://www.instagram.com/ProteanTechnologies"
    },
]

function Footer() {
  return (
    <div className='footerWrapper'>
    <footer className='footer'>
        <div className='group1'>
            <Image src={logoWhite} alt='protean logo' />
        </div>
        <div className='group2'>
            <div className='leftWrapper'>
                <ul>
                {pagesData.map((page, index) => {
                    return (
                    <li key={index}>
                        <a href={page.url} title={page.title}>{page.title}</a>
                    </li>
                    )
                })}
                </ul>
            </div>
            <div className='rightWrapper'>
            <ul>
                {socialsData.map((social, index) => {
                    return (
                    <li key={index}>
                        <a href={social.url} title={social.title}>
                            <Image src={social.img} alt={social.title} />
                        </a>
                    </li>
                    )
                })}
                </ul>
            </div>
        </div>
    </footer>
        <Image id='footerBgImage' src={footerBg} alt='decorative image' />
    </div>
  )
}

export default Footer
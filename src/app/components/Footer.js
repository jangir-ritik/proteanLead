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
        url: '/privacyPolicy',
    },
    {
        title: 'Disclaimer',
        url: '/disclaimer',
    },
    {
        title: 'Terms & Conditions',
        url: '/terms',
    },
    {
        title: 'Connect',
        url: '/connect',
    },
]

const socialsData = [
    {
        img: li,
        title: 'linkedin',
        url: ""
    },
    {
        img: x,
        title: 'x',
        url: ""
    },
    {
        img: fb,
        title: 'facebook',
        url: ""
    },
    {
        img: yt,
        title: 'youtube',
        url: ""
    },
    {
        img: ig,
        title: 'instagram',
        url: ""
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
                        <Link href={page.url} title={page.title}>{page.title}</Link>
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
                        <Link href={social.url} title={social.title}>
                            <Image src={social.img} alt={social.title} />
                        </Link>
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
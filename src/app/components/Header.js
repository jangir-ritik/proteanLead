import Image from 'next/image'
import logo from '../../../public/images/proteanLogo.png';

function Header() {
  return (
    <div className='Header'>
        <Image src={logo} alt='protean logo' />
    </div>
  )
}

export default Header
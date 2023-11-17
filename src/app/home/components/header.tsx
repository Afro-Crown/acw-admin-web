import acLogo from '../../../../public/logo-one.svg';
import userIcon from '../../../../public/user-icon.svg';
import shoppingCart from '../../../../public/shopping-cart-icon.svg';
import Image from 'next/image';
import { Trirong } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import NavMenu from './nav-menu';
import { EyeClosed, List } from '@phosphor-icons/react';


const trirong = Trirong({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
})

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return ( 
    <div className="lg:h-[104px] w-full bg-[#FFEAD4] flex items-center justify-between">
      <div className="flex w-1/4 items-center justify-center pl-2">
        <Image 
          src={acLogo}
          alt='Afro Crown Logo'
        />
      </div>
      <div className='border border-b-0 h-0 md:w-[20%] lg:w-[40%] border-[#A21A1A]'></div>
      <nav className="flex flex-row items-center h-full gap-2 p-2">
        <ul className='text-[#A21A1A] hidden lg:flex lg:flex-row md:flex md:flex-row md:items-center lg:h-full items-center gap-4 md:text-sm lg:text-lg md:w-full'>
          <Link href="#" className='hover:scale-105'><li className={trirong.className}>Seja um voluntário</li></Link>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
          <li className={trirong.className}>Sobre</li>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
          <li className={trirong.className}>Contatos</li>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
        </ul>
        <button className=''>
          <List size={24} color='#A21A1A' className='md:hidden lg:hidden' />
        </button>
        <button className='flex items-center cursor-pointer'  onClick={handleMenu}>
          <Image alt='User Icon' src={userIcon}/>
          {open == true ? <NavMenu /> : <EyeClosed className='hidden'/>}
        </button>
      </nav>
    </div>
   );
}
 
export default Header;
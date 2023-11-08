import acLogo from '../../../../public/logo-one.svg';
import userIcon from '../../../../public/user-icon.svg';
import shoppingCart from '../../../../public/shopping-cart-icon.svg';
import Image from 'next/image';
import { Trirong } from 'next/font/google';
import Link from 'next/link';


const trirong = Trirong({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
})

const Header = () => {
  return ( 
    <div className="h-[104px] w-full bg-[#FFEAD4] flex items-center justify-between ">
      <div className="flex w-1/4 items-center justify-center">
        <Image 
          src={acLogo}
          alt='Afro Crown Logo'
        />
      </div>
      <div className='border border-b-0 h-0 w-[40%] border-[#A21A1A]'></div>
      <nav className="flex flex-row h-full gap-2 p-2">
        <ul className='text-[#A21A1A] flex flex-row h-full items-center gap-4'>
          <Link href="#" className='hover:scale-105'><li className={trirong.className}>Seja um voluntário</li></Link>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
          <li className={trirong.className}>Sobre</li>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
          <li className={trirong.className}>Contatos</li>
          <div className='h-[20%] w-0 border border-y-1 border-[#A21A1A]'></div>
        </ul>
        <Image alt='User Icon' src={userIcon}/>
      </nav>
    </div>
   );
}
 
export default Header;
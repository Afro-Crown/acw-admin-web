import acLogo from '../../../../public/logo-one.svg';
import userIcon from '../../../../public/user-icon.svg';
import shoppingCart from '../../../../public/shopping-cart-icon.svg';
import Image from 'next/image';




const Header = () => {
  return ( 
    <div className="h-[104px] w-full bg-[#FFEAD4] flex items-center justify-between">
      <div className="flex w-1/2 pl-2">
        <Image 
          src={acLogo}
          alt='Afro Crown Logo'
        />
      </div>
      <div className="flex flex-row">
        <Image alt='User Icon' src={userIcon}/>
        <Image alt='Shopping bag' src={shoppingCart} />
      </div>
    </div>
   );
}
 
export default Header;
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo-one.svg';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#A21A1A] w-full h-20">
      <div className="flex items-center gap-4 ml-4">
        <Image src={logo} alt="Logo" />
        <h1 className="text-white font-bold text-2xl">Dellas & Delles</h1>
      </div>
      <nav className="flex items-center gap-4 mr-4">
        <span className="cursor-pointer">Login</span>
        <span className="cursor-pointer">Sign Up</span>
        <span className="cursor-pointer">Sign Up</span>
        <span className="cursor-pointer">Sign Up</span>
      </nav>
    </header>
  );
}
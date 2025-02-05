import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo-one.svg';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#FFEAD4] w-full h-20 px-64 fixed top-0">      
      <Image src={logo} alt="Logo" />
      <span className="bg-secondary px-40 py- mx-3 rounded-sm"></span>
      <div className="flex items-center mr-4">
        <Link href="/volunteer" className="pr-10 py-2 border-r-2 border-secondary  text-secondary">Seja um voluntário</Link>
        <Link href="/about" className="px-10 py-2 border-r-2 border-secondary  text-secondary">Sobre</Link>
        <Link href="/contact" className="px-10 py-2 border-r-2 border-secondary  text-secondary">Contato</Link>
        <Link href="/login" className="px-10 py-2  text-secondary">Entrar</Link>
      </div>
    </header>
  );
}
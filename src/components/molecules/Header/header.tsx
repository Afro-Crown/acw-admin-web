import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo-one.svg";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex max-w-5xl items-center justify-between gap-5">
        <Image src={logo} alt="Logo" width={250} />
        <span className="mx-3 h-[1px] w-[200px] rounded-sm bg-secondary"></span>
        <div className="flex items-center gap-5">
          <Link href="/volunteer" className="text-secondary">
            Seja um voluntário
          </Link>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <Link href="/about" className=" text-secondary">
            Sobre
          </Link>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <Link href="/contact" className=" text-secondary">
            Contato
          </Link>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <Link href="/login" className="text-secondary">
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}

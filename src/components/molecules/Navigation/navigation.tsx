import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="py-10 flex gap-2 items-center font-light text-sm w-[61rem]">
      <Link href="/profile">
        <p className={`cursor-pointer ${pathname === "/profile" ? "underline" : ""}`}>Perfil</p>
      </Link>
      <span className="inline-block w-1 h-1 bg-black rounded-full" />
      <Link href="/profile/agendamento">
        <p className={`cursor-pointer ${pathname === "/profile/agendamento" ? "underline" : ""}`}>Agendamentos</p>
      </Link>
      <span className="inline-block w-1 h-1 bg-black rounded-full" />
      <Link href="/profile/servicos">
        <p className={`cursor-pointer ${pathname === "/profile/servicos" ? "underline" : ""}`}>Serviços</p>
      </Link>
    </div>
  );
}

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex w-[61rem] items-center gap-2 py-10 text-sm font-light">
      <Link href="/profile">
        <p
          className={`cursor-pointer ${pathname === "/profile" ? "underline" : ""}`}
        >
          Perfil
        </p>
      </Link>
      <span className="inline-block h-1 w-1 rounded-full bg-black" />
      <Link href="/profile/agendamento">
        <p
          className={`cursor-pointer ${pathname === "/profile/agendamento" ? "underline" : ""}`}
        >
          Agendamentos
        </p>
      </Link>
      <span className="inline-block h-1 w-1 rounded-full bg-black" />
      <Link href="/profile/servicos">
        <p
          className={`cursor-pointer ${pathname === "/profile/servicos" ? "underline" : ""}`}
        >
          Serviços
        </p>
      </Link>
    </div>
  );
}

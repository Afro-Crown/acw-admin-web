"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo-one.svg";
import userImg from "../../../../public/user-icon.svg";
import { ModalProfile } from "../ModalProfile/modalProfile";
import { ModalHelp } from "@/components/molecules/Modalhelp/modalHelp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = {
    name: "John Doe",
    storeName: "Loja do João",
    email: "teste@gmail.com",
    image: userImg
  };
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const openHelpModal = () => {
    setIsHelpOpen(true);
  };
  
  return (
    <header className="relative flex h-20 w-full items-center justify-center bg-[#FFEAD4]">
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
          {user ? (
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Image src={user.image} alt="User" width={30} height={30} />
            </div>
          ) : (
            <Link href="/login" className="text-secondary">
              Entrar
            </Link>
          )}
        </div>
      </div>
      <ModalProfile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        storeName={user.storeName}
        openHelpModal={openHelpModal}
      />
      <ModalHelp isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
    </header>
  );
}

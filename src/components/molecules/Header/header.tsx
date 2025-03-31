"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ModalHelp } from "@/components/molecules/Modalhelp/modalHelp";

import logo from "../../../../public/logo-one.svg";
import userImg from "../../../../public/user-icon.svg";
import { ModalProfile } from "../ModalProfile/modalProfile";
import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";
import { ModalConfig } from "../ModalConfig/modalConfig";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);
  
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);


  const openHelpModal = () => {
    setIsHelpOpen(true);
  };
  const openModalConfig = () => {
    setIsConfigOpen(true);
  };

  return (
    <header className="relative flex h-20 w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex max-w-5xl items-center justify-between gap-5">
        <Image src={logo} alt="Logo" width={250} />
        <span className="mx-3 h-[1px] w-[200px] rounded-sm bg-secondary"></span>
        <div className="flex items-center gap-5">
          <p className="text-secondary cursor-pointer">
            Seja um voluntário
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <p  className=" text-secondary cursor-pointer">
            Sobre
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <p className=" text-secondary cursor-pointer">
            Contato
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          {user ? (
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Image src={userImg} alt="User" width={30} height={30} />
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
        ownerName={user?.ownerName || ""}
        openHelpModal={openHelpModal}
        openModalConfig={openModalConfig}
      />
      <ModalHelp isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
      <ModalConfig isOpen={isConfigOpen} setIsOpen={setIsConfigOpen}/>
    </header>
  );
}

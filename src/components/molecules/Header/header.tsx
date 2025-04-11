"use client";

import { useState } from "react";

import { HelpCircle, Info, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ModalHelp } from "@/components/molecules/Modalhelp/modalHelp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";

import logo from "../../../../public/logo-one.svg";
import userImg from "../../../../public/user-icon.svg";
import { ModalConfig } from "../ModalConfig/modalConfig";
import { ModalProfile } from "../ModalProfile/modalProfile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openHelpModal = () => {
    setIsHelpOpen(true);
    setIsMobileMenuOpen(false);
  };

  const openModalConfig = () => {
    setIsConfigOpen(true);
    setIsMobileMenuOpen(false);
  };

  const openProfileModal = () => {
    setIsOpen(true);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    {
      label: "Seja um voluntário",
      icon: <HelpCircle size={18} />,
      onClick: openHelpModal
    },
    {
      label: "Sobre",
      icon: <Info size={18} />,
      href: "#"
    },
    {
      label: "Contato",
      icon: <Mail size={18} />,
      href: "#"
    }
  ];

  return (
    <header className="relative flex h-16 w-full items-center justify-center bg-[#FFEAD4] px-4 md:h-20">
      <div className="flex w-full max-w-5xl items-center justify-between gap-2 md:gap-5">
        <Image src={logo} alt="Logo" width={180} className="md:w-[250px]" />

        {/* Separador para desktop */}
        <span className="mx-3 hidden h-[1px] w-[200px] rounded-sm bg-secondary md:block"></span>

        {/* Menu para desktop */}
        <div className="hidden items-center gap-5 md:flex">
          <p className="cursor-pointer text-secondary transition-colors hover:text-[#FF6734]">
            Seja um voluntário
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <p className="cursor-pointer text-secondary transition-colors hover:text-[#FF6734]">
            Sobre
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          <p className="cursor-pointer text-secondary transition-colors hover:text-[#FF6734]">
            Contato
          </p>
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
          {user ? (
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Image src={userImg} alt="User" width={30} height={30} />
            </div>
          ) : (
            <Link
              href="/login"
              className="text-secondary transition-colors hover:text-[#FF6734]"
            >
              Entrar
            </Link>
          )}
        </div>

        {/* Botão de menu para mobile */}
        <div className="flex items-center gap-2 md:hidden">
          {user ? (
            <div className="cursor-pointer" onClick={openProfileModal}>
              <Image src={userImg} alt="User" width={30} height={30} />
            </div>
          ) : (
            <Link
              href="/login"
              className="text-secondary transition-colors hover:text-[#FF6734]"
            >
              Entrar
            </Link>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-md p-2 transition-colors hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Modal de menu para mobile */}
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="border-t-4 border-t-[#FF6734] sm:max-w-[300px]">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-xl">Menu</DialogTitle>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md p-1 transition-colors hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            {menuItems.map((item, index) =>
              item.onClick ? (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="flex w-full items-center gap-3 rounded-md p-3 text-left transition-all hover:bg-gray-100 hover:text-[#FF6734]"
                >
                  {item.icon}
                  {item.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={item.href || "#"}
                  className="flex items-center gap-3 rounded-md p-3 transition-all hover:bg-gray-100 hover:text-[#FF6734]"
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ModalProfile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ownerName={user?.ownerName || ""}
        openHelpModal={openHelpModal}
        openModalConfig={openModalConfig}
      />
      <ModalHelp isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
      <ModalConfig isOpen={isConfigOpen} setIsOpen={setIsConfigOpen} />
    </header>
  );
}

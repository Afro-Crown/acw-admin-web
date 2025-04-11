"use client";

import React, { useState } from "react";

import {
  Calendar,
  HelpCircle,
  Info,
  Mail,
  Menu,
  Settings,
  User,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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

  // Itens de navegação
  const navigationItems = [
    {
      href: "/profile",
      label: "Perfil",
      icon: <User size={18} />
    },
    {
      href: "/profile/agendamento",
      label: "Agendamentos",
      icon: <Calendar size={18} />
    },
    {
      href: "/profile/servicos",
      label: "Serviços",
      icon: <Settings size={18} />
    }
  ];

  // Itens do menu principal
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
        <span className="mx-3 hidden h-[1px] w-[200px] rounded-sm bg-secondary md:block"></span>

        <div className="hidden items-center gap-5 md:flex">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link href={item.href}>
                <p
                  className={`flex cursor-pointer items-center gap-1 text-secondary transition-colors  hover:text-[#FF6734] ${
                    pathname === item.href
                      ? "font-medium text-[#FF6734] underline"
                      : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                </p>
              </Link>
              {index < navigationItems.length - 1 && (
                <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>
              )}
            </React.Fragment>
          ))}

          {/* Separador entre navegação e outros links */}
          <span className="mx-3 h-[30px] w-[2px] rounded-sm bg-secondary"></span>

          {/* Perfil/Login */}
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
        <DialogContent className="fixed inset-0 h-screen w-full border-none p-0 md:relative md:h-auto md:w-auto md:max-w-[300px] md:rounded-lg md:border-t-4 md:border-t-[#FF6734]">
          <DialogHeader className="flex flex-row items-center justify-between border-b border-gray-200 p-4">
            <DialogTitle className="text-xl">Menu</DialogTitle>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md p-2 transition-colors hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </DialogHeader>
          <div className="flex h-[calc(100vh-4rem)] flex-col gap-3 overflow-y-auto p-4 md:h-auto">
            {/* Links de navegação */}
            <div className="mb-2 border-b border-gray-200 pb-2">
              <h3 className="mb-2 text-sm font-medium text-gray-500">
                Navegação
              </h3>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-md p-3 transition-all hover:bg-gray-100 ${
                    pathname === item.href
                      ? "bg-[#FFC8AF] bg-opacity-20 font-medium text-[#FF6734]"
                      : "hover:text-[#FF6734]"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Links adicionais */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-500">
                Informações
              </h3>
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

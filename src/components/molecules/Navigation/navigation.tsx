import React, { useState } from "react";

import { Calendar, Menu, Settings, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/profile", label: "Perfil", icon: <User size={18} /> },
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

  return (
    <>
      {/* Menu para desktop */}
      <div className="hidden w-full items-center gap-2 py-6 text-sm font-light md:flex md:py-8 lg:py-10">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.href}>
            <Link href={item.href}>
              <p
                className={`flex cursor-pointer items-center gap-1 transition-all duration-200 hover:text-[#FF6734] ${
                  pathname === item.href
                    ? "font-medium text-[#FF6734] underline"
                    : ""
                }`}
              >
                {item.icon}
                {item.label}
              </p>
            </Link>
            {index < menuItems.length - 1 && (
              <span className="inline-block h-1 w-1 rounded-full bg-black" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Botão de menu para mobile */}
      <div className="flex w-full items-center justify-between py-4 md:hidden">
        <h1 className="text-lg font-medium">Perfil</h1>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Modal de menu para mobile */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent className="border-t-4 border-t-[#FF6734] sm:max-w-[300px]">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-xl">Menu de Navegação</DialogTitle>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-gray-100 ${
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
        </DialogContent>
      </Dialog>
    </>
  );
}
